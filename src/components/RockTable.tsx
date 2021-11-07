import { Box, Button, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ogawayama from '../data/ogawayama.json';
import { Rock, Route } from '../../interfaces/index'


function createData(
    id: number,
    nameEN: string,
    nameJP: string,
    rocks: Rock[]
) {
    return {
        id,
        nameEN,
        nameJP,
        rocks,
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = useState<boolean>(false);
    const [subTableOpen, setSubTableOpen] = useState<boolean>(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="right">{row.nameJP}</TableCell>
                <TableCell align="right">{row.nameEN}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Rocks
                            </Typography>
                            <Table size="small" aria-label="rocks">
                                <TableHead>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell>Id</TableCell>
                                        <TableCell>NameEN</TableCell>
                                        <TableCell align="right">NameJP</TableCell>
                                        <TableCell align="right">Latitude</TableCell>
                                        <TableCell align="right">Longitude</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.rocks.map((rockRow: Rock) => (
                                        <>
                                            <TableRow key={rockRow.id}>
                                                <TableCell>
                                                    <IconButton
                                                        aria-label="expand row"
                                                        size="small"
                                                        onClick={() => setSubTableOpen(!subTableOpen)}
                                                    >
                                                        {subTableOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {rockRow.id}
                                                </TableCell>
                                                <TableCell>{rockRow.nameJP}</TableCell>
                                                <TableCell align="right">{rockRow.nameEN}</TableCell>
                                                <TableCell align="right">{rockRow.latitude}</TableCell>
                                                <TableCell align="right">{rockRow.longitude}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                                    <Collapse in={subTableOpen} timeout="auto" unmountOnExit>
                                                        <Box sx={{ margin: 1 }}>
                                                            <Typography variant="h6" gutterBottom component="div">
                                                                Routes
                                                            </Typography>
                                                            <Table size="small" aria-label="rocks">
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell>Id</TableCell>
                                                                        <TableCell>Label</TableCell>
                                                                        <TableCell align="right">NameEN</TableCell>
                                                                        <TableCell align="right">NameJP</TableCell>
                                                                        <TableCell align="right">GradeJP</TableCell>
                                                                        <TableCell align="right">GradeUSA</TableCell>
                                                                        <TableCell />
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    {rockRow.routes.map((routeRow: Route) => (
                                                                        <TableRow key={routeRow.id}>
                                                                            <TableCell component="th" scope="row">
                                                                                {routeRow.id}
                                                                            </TableCell>
                                                                            <TableCell>{routeRow.label}</TableCell>
                                                                            <TableCell align="right">{routeRow.nameJP}</TableCell>
                                                                            <TableCell align="right">{routeRow.nameEN}</TableCell>
                                                                            <TableCell align="right">{routeRow.gradeJP}</TableCell>
                                                                            <TableCell align="right">{routeRow.gradeUSA}</TableCell>
                                                                            <TableCell align="right">
                                                                                <Button color="inherit" onClick={() => console.log('Flash')}>Flash</Button>
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    ))}
                                                                </TableBody>
                                                            </Table>
                                                        </Box>
                                                    </Collapse>
                                                </TableCell>
                                            </TableRow>
                                        </>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment >
    );
}

const rows = [
    createData(
        ogawayama.ogawayama[0].id,
        ogawayama.ogawayama[0].nameEN,
        ogawayama.ogawayama[0].nameJP,
        ogawayama.ogawayama[0].rocks
    ),

];

export default function RockTable() {
    return (
        <>
            <Typography variant="h3" gutterBottom component="div">
                Ogawayama
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Area JP</TableCell>
                            <TableCell align="right">Area En</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.id} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}