import {useState, useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../utils/firebase/firebase-utils";
import {Container, Grid, Typography} from "@mui/material";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import {newsStyles} from "../styles/materialUIStyles";


export default function News() {
    const [news, setNews] = useState([])
    const newsCollectionRef = collection(db, 'news')
    const getNews = async() => {
        const data = await getDocs(newsCollectionRef)
        console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        setNews(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

    }
    useEffect(() => {

        getNews().then(data => {
            console.log('News data fetched')
        })
    })
    return (
        <React.Fragment>
            <Container>
                <Box sx={{ bgcolor: '##559db8', height: '100vh' }}>
                    <Grid container spacing={2}>
                        <Typography variant="h2" component="h1">
                            Новости
                        </Typography>
                        <Grid item xs={12}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minHeight="100vh"
                            >

                                <Grid container spacing={24}
                                      justify="center"
                                      style={{ minHeight: '100vh', maxWidth: '100%' }}>
                                    <Grid item container xs={12}
                                          justify="center"
                                    >
                                        {
                                            news.map((item) => {
                                                return <div
                                                    key={item.id}
                                                >

                                                    <Typography variant='h3' component="h2">{item.title}</Typography>

                                                    <Grid item container>
                                                        <Grid item xs={6}>
                                                            <iframe width="453" height="236" src={item.video}
                                                                    title={item.title}
                                                                    frameBorder="0"
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                            ></iframe>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography variant="p" paragraph >{item.text}</Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Box  sx={{
                                                                width: "80vw",
                                                                height: 450,
                                                                overflowY: 'scroll',
                                                                spacing: 2,
                                                                border: '1px solid grey'
                                                            }}>
                                                                <ImageList variant="masonry" cols={3} gap={2}>
                                                                    {item.pictures?.map((pic, i) => (
                                                                        <ImageListItem key={i}>
                                                                            <img
                                                                                src={`${pic}?w=248&fit=crop&auto=format`}
                                                                                srcSet={`${pic}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                                                alt={pic}
                                                                                loading="lazy"
                                                                            />
                                                                        </ImageListItem>
                                                                    ))}
                                                                </ImageList>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>

                                                </div>
                                            })
                                        }
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
            )
        }