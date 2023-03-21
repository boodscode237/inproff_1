import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const contacts = [
    {
        name: 'Org1',
        email: 'org1@gmail.com',
    },
    {
        name: 'Org2',
        email: 'org2@gmail.com',
    },
    {
        name: 'Org3',
        email: 'org2@gmail.com',
    },
    {
        name: 'Org4',
        email: 'org2@gmail.com',
    },
    {
        name: 'Org5',
        email: 'org2@gmail.com',
    },
    {
        name: 'Org6',
        email: 'org2@gmail.com',
    },

]

export default function ChatPage(){
    return(
        <div>
            <h1>Contact Us</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        contacts.map((contact, index) =>(
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Item>
                                    <Button onClick={() => window.location = `mailto:${contact.email}`} variant="contained" endIcon={<SendIcon />}>
                                        {contact.name}
                                    </Button>
                                </Item>

                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </div>
    )
}