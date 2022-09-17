import { FC, useEffect, useReducer } from 'react';

import { useSnackbar } from 'notistack';

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

    const { enqueueSnackbar } = useSnackbar();

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

    const updateEntry = async ({ _id, description, status }: Entry, showSnackbar = false) => {
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status })

            dispatch({ type: '[Entry] Entry-Updated', payload: data })

            if (showSnackbar) {
                enqueueSnackbar('Entrada actualizada', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center'
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
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