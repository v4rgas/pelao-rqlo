import { Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ExerciseStatsTable({ exercise, onLastSetRemove, onSetsUpdate, sets }) {
    // const [sets, setSets] = useState([])

    const removeLastSet = () => {
        if (sets.length === 0)
            onLastSetRemove()
        else
            onSetsUpdate(sets.slice(0, sets.length - 1))

    }
    return (
        <TableContainer component={Paper}>
            <Typography variant="h5" sx={{ p: 1, textAlign: "center" }}>{exercise?.movement.name}</Typography>
            <IconButton onClick={() => onSetsUpdate([...sets, { reps: 0, weight: 0 }])}>
                <AddIcon />
            </IconButton>
            <IconButton onClick={removeLastSet}>
                <RemoveIcon />
            </IconButton>
            <Divider />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            <Typography variant="h6">Reps</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6">Weight (kg)</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sets.map((set, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell align="center">
                                    <TextField fullWidth type="number" inputProps={{ min: 0 }} variant="outlined" onChange={
                                        (e) => {
                                            const newSets = [...sets]
                                            newSets[index].reps = e.target.value
                                            onSetsUpdate(newSets)
                                        }
                                    }
                                        value={set.reps} />

                                </TableCell>
                                <TableCell align="center">
                                    <TextField fullWidth type="number" inputProps={{ min: 0 }} variant="outlined"
                                        onChange={
                                            (e) => {
                                                const newSets = [...sets]
                                                newSets[index].weight = e.target.value
                                                onSetsUpdate(newSets)
                                            }}
                                        value={set.weight}
                                    />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>

        </TableContainer>
    )

}