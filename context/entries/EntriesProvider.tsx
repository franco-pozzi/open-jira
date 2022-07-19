import { FC, useEffect, useReducer } from 'react';

import { EntriesContext, entriesReducer } from './';

import { entriesApi } from '../../apis';

import { Entry } from '../../interfaces';

import { v4 as uuidv4 } from 'uuid';

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
        const { data } = await entriesApi.get<Entry[]>('/entries')

        try {
            dispatch({ type: "[Entry] Refresh-Data", payload: data })
        }
        catch {

        }
    }


    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            createdAt: Date.now(),
            status: 'pending',
            description
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
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