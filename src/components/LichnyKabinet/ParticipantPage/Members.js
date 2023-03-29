import * as React from 'react';
import {
    Box, Container, Grid,
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {db} from "../../../utils/firebase/firebase-utils";
import {collection, getDocs} from "firebase/firestore";
import {useAuth} from "../../../context/AuthContext";
import LichnyKabinet from "./ParticipantPage";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function Members(){
    const {user} = useAuth()
    const [usersData, setUsersData] = useState([])
    const usersCollectionReference = collection(db, 'users')


    useEffect(() =>{
        const getUsers = async () => {
            const data = await getDocs(usersCollectionReference)
            setUsersData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

            // console.log('usersData', usersData)
            const names = []
            usersData.forEach(x => {
                const members = x.teamMembers
                names.push(members)
            })
            // console.log(names[0])

        }
        getUsers()
    }, [])
    const person = []
    usersData.forEach(element => {
        const {id, userId} = element
        // console.log('user-element', element.user)
        // console.log(id, userId)
        if(userId === user.uid ){
            const {teamMembers} = element
            person.push(teamMembers)
        }
    })

    const membersDetails = []
    for(let i in person){
        membersDetails.push(person[i].split(',\n'))
    }
    let rx = /([^:]+):\s*(.*?)(?=\w+:|$)/g;
    let s = membersDetails;
    let m, res=[];
    while (m=rx.exec(s)) {
        res.push([m[1].trim(),m[2].trim()].join(" "));
    }
    function createData(name, role) {
        return { name, role };
    }
    const rows = []
    for (let i in res){
        rows.push(createData(res[i].split(" ")[0], res[i].split(" ")[1]))
    }
    // console.log(rows)

    return(
        <LichnyKabinet>
            <React.Fragment>
                <Container>
                    <Box sx={{ bgcolor: '##559db8', height: '100vh' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box
                                    display="flex"
                                >
                    {
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell><Typography variant='h6' className="text-white font-poppins text-2xl tracking-widest">Participants</Typography></StyledTableCell>
                                        <StyledTableCell align="left"><Typography variant='h6' className="text-white font-poppins text-2xl tracking-widest">Roles</Typography></StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                <Typography variant='p' color='#000000' className="text-white font-poppins text-2xl tracking-widest">{`${row.name}`.toUpperCase()}</Typography>
                                            </StyledTableCell>
                                            <StyledTableCell align="left">
                                                <Typography variant='p' color='#000000' className="text-white font-poppins text-2xl tracking-widest">{`${row.role}`.toUpperCase()}</Typography>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                                </Box>
                            </Grid>
                            </Grid>
                    </Box>
                </Container>
            </React.Fragment>
        </LichnyKabinet>
    )
}