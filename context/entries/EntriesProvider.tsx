import { FC, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';

type EntriesProviderProps = {
    children: React.ReactNode;
};
export interface EntriesState {
    entries: [];
}

export const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
};

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    return (
        <EntriesContext.Provider
            value={{
                ...state,
            }}
        >
            {children}
        </EntriesContext.Provider >
    );
};