import {Box, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useEffect, useState} from "react";
import {db} from "../../../utils/firebase/firebase-utils";
import {collection, getDocs} from "firebase/firestore";
import {useAuth} from "../../../context/AuthContext";
import LichnyKabinet from "./ParticipantPage";


export default function Members(){
    const {user} = useAuth()
    const [usersData, setUsersData] = useState([])
    const usersCollectionReference = collection(db, 'users')

    useEffect(() =>{
        const getUsers = async () => {
            const data = await getDocs(usersCollectionReference)
            setUsersData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

            console.log('usersData', usersData)
            const names = []
            usersData.forEach(x => {
                const members = x.teamMembers
                names.push(members)
            })
            console.log(names[0])

        }
        getUsers()
    }, [])
    const person = []
    usersData.forEach(element => {
        const {id, userId} = element
        console.log('user-element', element.user)
        console.log(id, userId)
        if(userId === user.uid ){
            const {teamMembers} = element
            person.push(teamMembers)
        }
    })
    console.log('person', person)
    console.log('person1', person[0].split(',\n'))
    function createData(name, role) {
        return { name, role };
    }
    const rows = []
    const membersDetails = person[0].split(',\n')

    return(
        <LichnyKabinet>
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
                        person
                    }
                </div>
            </Box>
        </LichnyKabinet>
    )
}