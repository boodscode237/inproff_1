import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import {
    Container,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../utils/firebase/firebase-utils";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export default function Home() {
    const [element, setElement] = useState([])
    const newsCollectionRef = collection(db, 'about_us')
    const [banner, setBanner] = useState('')
    const [description, setDescription] = useState('')
    const [goals, setGoals] = useState([])
    const [photos, setPhotos] = useState([])
    const getInfos = async() => {
        const data = await getDocs(newsCollectionRef)
        setElement(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        setBanner(element[0].banner)
        setDescription(element[0].description)
        setGoals(element[0].goals)
        setPhotos(element[0].photos)

    }
    useEffect(() => {
        getInfos()
    }, [element])
    return (
            <React.Fragment>
                <Container>
                    <Typography variant="h2">
                        О нас
                    </Typography>
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
                                        width: '100%'
                                    }}
                                >

                                    <Stack spacing={2} direction='column'>
                                        <img src={banner} alt="About us banner"/>

                                        <Typography variant="p" gutterBottom>
                                            {
                                                description
                                            }
                                        </Typography>
                                    </Stack>

                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h3">Галерея</Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 1,
                                        py: 1,
                                        overflow: 'auto',
                                        alignItem: 'center',
                                        width: '100%',
                                        scrollSnapType: 'x mandatory',
                                        '& > *': {
                                            scrollSnapAlign: 'center',
                                        },
                                        '::-webkit-scrollbar': { display: 'none' },
                                    }}
                                >
                                    <Box sx={{ width: "100vw", height: 450, overflowY: 'scroll' }}>
                                        <ImageList variant="masonry" cols={3} gap={8}>
                                            {photos.map((item) => (
                                                <ImageListItem key={item}>
                                                    <img
                                                        src={`${item}?w=248&fit=crop&auto=format`}
                                                        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                        alt={item}
                                                        loading="lazy"
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </Box>
                                </Box>

                            </Grid>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        alignItem: 'center',
                                        width: '100%'
                                    }}
                                >
                                    <Stack spacing={2} direction='column'>
                                        <Typography variant="h3" gutterBottom>Наши цели</Typography>
                                        <List
                                            sx={{ width: '100%', maxWidth: 360,}}
                                            aria-label="contacts"
                                        >
                                            {
                                                goals.map(goal => {
                                                    return <ListItem disablePadding>
                                                        <ListItemButton>
                                                            <ListItemIcon>
                                                                <DoubleArrowIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={goal} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                })
                                            }
                                        </List>
                                    </Stack>

                                </Box>
                            </Grid>


                        </Grid>
                    </Box>
            </Container>
        </React.Fragment>
    )
}