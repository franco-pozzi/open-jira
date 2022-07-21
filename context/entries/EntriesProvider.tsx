import { FC, useEffect, useReducer } from 'react';

import { EntriesContext, entriesReducer } from './';

import { entriesApi } from '../../apis';

import { Entry } from '../../interfaces';

type EntriesProviderProps = {
    children: React.ReactNode;
};
export interface EntriesState {
    entries: Entry[];
}

export const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
};

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    useEffect(() => {
        refreshEntries()
    }, [])

    const refreshEntries = async () => {
        try {
            const { data } = await entriesApi.get<Entry[]>('/entries')

            dispatch({ type: "[Entry] Refresh-Data", payload: data })
        } catch (error) {
            console.log(error)
        }
    }


    const addNewEntry = async (description: string) => {
        try {
            const { data } = await entriesApi.post<Entry>('/entries', { description })

            dispatch({ type: '[Entry] Add-Entry', payload: data })
        } catch (error) {
            console.log(error)
        }
    }

    const updateEntry = (entry: Entry) => {
        dispatch({ type: '[Entry] Entry-Updated', payload: entry })
    }

    return (
        <EntriesContext.Provider
            value={{
                ...state,

                // Methods
                addNewEntry,
                updateEntry
            }}
        >
            {children}
        </EntriesContext.Provider >
    );
};