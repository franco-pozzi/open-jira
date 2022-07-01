import { ChangeEvent, useState, useContext } from 'react';

import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui';

import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export const NewEntry = () => {
    const { addNewEntry } = useContext(EntriesContext);
    const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);


    const [inputValue, setInputValue] = useState('')
    const [touched, setTouched] = useState(false)

    const onFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if (!inputValue.length) { return null };

        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue('');
    }

    return (
        <Box sx={{ marginBottom: 2 }}>
            {
                isAddingEntry ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            autoFocus
                            multiline
                            placeholder='Nueva Entrada'
                            label='Nueva entrada'
                            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                            error={inputValue.length <= 0 && touched}
                            value={inputValue}
                            onChange={onFieldChanged}
                            onBlur={() => setTouched(true)}
                        />

                        <Box display='flex' justifyContent='space-between'>
                            <Button variant='outlined' color='error' onClick={() => setIsAddingEntry(false)}>
                                Cancelar
                            </Button>    <Button variant='outlined' color='secondary' endIcon={<SaveOutlinedIcon />} onClick={onSave}>
                                Guardar
                            </Button>

                        </Box>
                    </>
                ) : (
                    <Button
                        startIcon={<AddOutlinedIcon />}
                        fullWidth
                        variant='outlined'
                        onClick={() => setIsAddingEntry(true)}
                    >
                        Agregar tarea
                    </Button>
                )
            }
        </Box>
    )
}
