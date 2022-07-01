import { EntriesState } from "./";

type EntriesActionType =
    | { type: "[Entries] - Open Sidebar" }
    | { type: "[Entries] - Close Sidebar" };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
    switch (action.type) {
        // case "Entries - Open Sidebar":
        //   return {
        //     ...state,
        //     sidemenuOpen: true,
        //   };

        default:
            return state;
    }
};
