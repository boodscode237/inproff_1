import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
function createData(participant, role, fat, carbs, protein) {
    return { participant, role, fat, carbs, protein };
}

const rows = [
    createData('Rodion Dmitriev', 'генеральный директор'),
    createData('Nadya Kulikova', 'Директор по маркетингу'),
    createData('Директор по связям с общественностью', 'молодой специалист'),
    createData('Бухгалтер', 'Сотрудник по персоналу'),
    createData('Radinka Grigoreva', 'Программист'),
];

export default function Members(){
    return(
        <div>
            {/*<table className='table-auto border-separate border border-slate-500'>*/}
            {/*    <thead>*/}
            {/*        <tr>*/}
            {/*            <th className='text-2xl px-6 py-3 border border-slate-600'>Фамилия, Имя, отчество</th>*/}
            {/*            <th className='text-2xl px-6 py-3 border border-slate-600'>Роль</th>*/}
            {/*        </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*        <tr>*/}
            {/*            <td className='text-2xl px-6 py-3 border border-slate-600'>Lorem ipsum dolor.</td>*/}
            {/*            <td className='text-2xl px-6 py-3 border border-slate-600'>Lorem ipsum dolor.</td>*/}
            {/*        </tr>*/}

            {/*    </tbody>*/}
            {/*</table>*/}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Участники</TableCell>
                            <TableCell align="right">Роли</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.participant}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.participant}
                                </TableCell>
                                <TableCell align="right">{row.role}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}