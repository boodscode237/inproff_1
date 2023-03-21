import {Box, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useEffect, useState} from "react";
import {db} from "../../../utils/firebase/firebase-utils";
import {collection, getDocs} from "firebase/firestore";
import {useAuth} from "../../../context/AuthContext";
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
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

export default function Members(){
    const {user} = useAuth()
    const [usersData, setUsersData] = useState([])
    const usersCollectionReference = collection(db, 'users')

    useEffect(() =>{
        const getUsers = async () => {
            const data = await getDocs(usersCollectionReference)
            setUsersData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log('usersData', data.docs)
            const names = []
            usersData.forEach(x => {
                const members = x.teamMembers
                names.push(members)
            })
            console.log(names[0])

            // console.log(i[0].split(',\n')[0].split(': ')) ==> output: [ "ИВАН ИВАНОВ", "руководитель" ]
            // console.log(user.email)
        }
        getUsers()
    }, [])
    const names = []
    usersData.forEach(x => {
        const members = x.teamMembers
        names.push(members)
    })
    return(
        <div>
            {/*<TableContainer component={Paper}>*/}
            {/*    <Table sx={{ minWidth: 650 }} aria-label="simple table">*/}
            {/*        <TableHead>*/}
            {/*            <TableRow>*/}
            {/*                <TableCell>Участники</TableCell>*/}
            {/*                <TableCell align="right">Роли</TableCell>*/}
            {/*            </TableRow>*/}
            {/*        </TableHead>*/}
            {/*        <TableBody>*/}
            {/*            {rows.map((row) => (*/}
            {/*                <TableRow*/}
            {/*                    key={row.participant}*/}
            {/*                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
            {/*                >*/}
            {/*                    <TableCell component="th" scope="row">*/}
            {/*                        {row.participant}*/}
            {/*                    </TableCell>*/}
            {/*                    <TableCell align="right">{row.role}</TableCell>*/}
            {/*                </TableRow>*/}
            {/*            ))}*/}
            {/*        </TableBody>*/}
            {/*    </Table>*/}
            {/*</TableContainer>*/}
            <Box
                sx={{
                    p: 2,
                    // bgcolor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr' },
                    gap: 2,
                }}
            >
                <div >
                    {
                       names[0]
                    }
                </div>
            </Box>
        </div>
    )
}