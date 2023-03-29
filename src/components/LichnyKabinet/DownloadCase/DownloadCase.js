import LichnyKabinet from "../ParticipantPage/ParticipantPage";
import * as React from 'react';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Paper,
    styled, Typography,
    useTheme
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {useState} from "react";
import {useAuth} from "../../../context/AuthContext";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function handleDelete(listRef) {
    
}



export default function DownloadCase(){
    const [file, setFile] = useState("")
    const {user} = useAuth()
    const {uid, email} = user
    const storage = getStorage();
    const listRef = ref(storage, `work`);
    getDownloadURL(listRef)
        .then((url) => {
            // console.log(url)
            setFile(url)
        })
        .catch((error) => {
            console.log(error.message)
        });
    function handleOpen(file) {
        window.open(file, "_blank");
    }

    function handleDelete(listRef) {

    }
    return(
        <LichnyKabinet>
        <React.Fragment>
            <Container>
                <Box sx={{ bgcolor: '##559db8', height: '100vh' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minHeight="100vh"
                                sx={{
                                    alignItem: 'center',
                                    backgroundColor: '#559db8',
                                    '&:hover': {
                                        backgroundColor: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}
                            >
                                <Paper
                                    sx={{
                                        minHeight: 250,
                                        textAlign: 'center',
                                        minWidth: 150,
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                    }}>
                                    <Card sx={{ display: 'flex', backgroundColor: (theme) =>
                                            theme.palette.mode === 'light' ? '#6181a7' : '#fff', }}>
                                        <CardMedia
                                            component="pdf"
                                            sx={{ width: 200, height: 200 }}
                                            image="https://clipartsign.com/upload/2016/10/31/clipart-file-or-document-icon.png"
                                            alt="Live from space album cover"
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto',  }}>
                                                <Stack spacing={2}>
                                                    <Button onClick={() => handleOpen(file)}>
                                                        <IconButton variant="contained" aria-label="delete" color="secondary" size="large">
                                                            <FileDownloadIcon fontSize="inherit" />
                                                        </IconButton>
                                                    </Button>
                                                    <Button onClick={() => handleOpen(file)}>
                                                        <IconButton variant="contained" aria-label="delete" color="secondary" size="large">
                                                            <OpenInNewIcon fontSize="inherit" />
                                                        </IconButton>
                                                    </Button>
                                                </Stack>
                                            </CardContent>
                                        </Box>
                                    </Card>
                                    <Typography sx={{color: "#1A2027"}} variant="p" gutterBottom>
                                        Lorem ipsum dolor sit amet
                                    </Typography>
                                </Paper>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
        </LichnyKabinet>
    )
}