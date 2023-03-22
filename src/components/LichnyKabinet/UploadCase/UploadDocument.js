import LichnyKabinet from "../ParticipantPage/ParticipantPage";
import * as React from 'react';
import {useState} from "react";
import {Document, Page, pdfjs} from 'react-pdf';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import {Box, Card, CardContent, CardMedia, Container, Grid, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from "@mui/icons-material/Send";
import {storage} from "../../../utils/firebase/firebase-utils";
import {ref, uploadBytes, getDownloadURL, listAll, getStorage, deleteObject} from 'firebase/storage'
import docum from './tsifrovizatsiya-v-sisteme-upravleniya-obrazovatelnym-uchrezhdeniem.pdf'
import {useAuth} from "../../../context/AuthContext";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;




export default function UploadCase(){
    const [work, setWork] = useState(null)
    const [url, setUrl] = useState(null)
    const [numPages, setNumPages] = useState(null);
    const [file, setFile] = useState("")
    const {user} = useAuth()
    const {uid, email} = user
    const storage = getStorage();
    // Create a reference under which you want to list
    const listRef = ref(storage, `Works/${email}/${uid}`);
    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setWork(e.target.files[0])
        }
    }
    console.log(work)
    function handleOpen(link) {
        window.open(link, "_blank");
    }

    function handleDelete(desertRef) {
        deleteObject(desertRef).then(() => {
            console.log("Deleted")
            setFile(null)
        }).catch((error) => {
            console.log(`Couldn't deleted file ${uid}`)
        });
    }
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    const handleSubmit = () => {
        const workRef = ref(storage, `${listRef}`)
        uploadBytes(workRef, work).then(() => {
            getDownloadURL(workRef).then((url) => {
                setUrl(url)
            }).catch(error => {
                console.log("error getting the work url")
            })
            setWork(null)
        }).catch(error => {
            console.log("error uploading the work", error.message)
        })

    }


    getDownloadURL(listRef)
        .then((url) => {
            console.log(url)
            setFile(url)
        })
        .catch((error) => {
            console.log(error.message)
        });
    console.log(file)
    const allowed = 'pdf/*'
    return(
        <LichnyKabinet>
    <Container>
        <Grid
            container
            spacing={2}
        >
            <Grid
                item
                xs={6}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="75vh"
                    sx={{
                        alignItem: 'center',
                        backgroundColor: '#e9aeae',
                        '&:hover': {
                            backgroundColor: '#d7e8ef',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <Stack direction="row" justifyItem='center' alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Upload
                            <input hidden accept="pdf/* pptx/* jpg/* jpeg/* image/*" onChange={handleImageChange} type="file" />
                        </Button>
                        <Button onClick={handleSubmit}>
                            <IconButton variant="contained" aria-label="delete" color="primary" size="large">
                                <SendIcon fontSize="inherit" />
                            </IconButton>
                        </Button>
                        <TextField id="outlined-basic" label="Case Name" name='caseName' variant="outlined" />
                    </Stack>
                </Box>
            </Grid>
            <Grid
                item
                xs={6}
                rowSpacing={2}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="75vh"
                    sx={{
                        alignItem: 'center',
                        backgroundColor: '#559db8',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <Card sx={{ display: 'flex', backgroundColor: (theme) =>
                            theme.palette.mode === 'light' ? '#6181a7' : '#fff', }}>
                        {file && <CardMedia
                            component="pdf"
                            sx={{ width: 200, height: 200 }}
                            image="https://clipartsign.com/upload/2016/10/31/clipart-file-or-document-icon.png"
                            alt="Live from space album cover"
                        />}
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto',  }}>
                                <Stack spacing={2}>
                                    <Button onClick={() => handleDelete(listRef)}>
                                        <IconButton variant="contained" aria-label="delete" color="secondary" size="large">
                                            <DeleteIcon fontSize="inherit" />
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
                </Box>
            </Grid>
        </Grid>
    </Container>
        </LichnyKabinet>
    )
}