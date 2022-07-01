import { FC, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';

import { Entry } from '../../interfaces';

import { v4 as uuidv4 } from 'uuid';
type EntriesProviderProps = {
    children: React.ReactNode;
};
export interface EntriesState {
    entries: Entry[];
}

export const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: A modo de test se muestra informacion',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'Finalizada: A modo de test se muestra informacion',
            status: 'finished',
            createdAt: Date.now() - 1400000,
        },
        {
            _id: uuidv4(),
            description: 'En progreso: A modo de test se muestra informacion',
            status: 'in-progress',
            createdAt: Date.now() - 100000,
        },
    ],
};

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            createdAt: Date.now(),
            status: 'pending',
            description
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
    }

    return (
        <EntriesContext.Provider
            value={{
                ...state,

                // Methods
                addNewEntry
            }}
        >
            {children}
        </EntriesContext.Provider >
    );
};