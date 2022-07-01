import { List, Paper } from "@mui/material";
import { DragEvent, FC, useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";

import styles from './EntryList.module.css'

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext)
    const { isDragging } = useContext(UIContext)


    const entriesByStatus = useMemo(() => entries.filter((entry) => entry.status === status), [entries])

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text')
    }

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    return (
        <div onDrop={onDropEntry} onDragOver={allowDrop} className={isDragging ? styles.dragging : ''}>
            <Paper
                sx={{
                    height: "calc(100vh - 250px)",
                    overflow: "auto",
                    backgroundColor: "transparent",
                    padding: "5px 10px",
                }}
            >
                <List sx={{ opacity: isDragging ? .2 : 1, transition: 'all .3s' }}>
                    {
                        entriesByStatus.map((entry) => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
                </List>
            </Paper>
        </div>
    );
};
