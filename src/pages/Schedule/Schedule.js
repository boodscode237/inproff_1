import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../utils/firebase/firebase-utils";
import {Avatar, Container, Grid, Typography} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import {
    Timeline,
    TimelineConnector, TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";

function FastfoodIcon() {
    return null;
}

function HotelIcon() {
    return null;
}

export default function Schedule() {
    const [graphic, setGraphic] = useState([])
    const organizerCollectionRef = collection(db, 'graphic')

    const getGraphic = async() => {
        const data = await getDocs(organizerCollectionRef)
        console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        setGraphic(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

    }
    useEffect(() => {

        getGraphic().then(data => {
            console.log('Graphic data fetched')
            console.log(data)
        })
    }, [])
    return (
        <React.Fragment>
            <Container>
                <Typography variant="h2">
                    График
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
                                <Timeline position="alternate">
                                    {
                                        graphic.map((item) => {
                                            return <TimelineItem key={item.id}>
                                                <TimelineOppositeContent
                                                    sx={{ m: 'auto 0' }}
                                                    align="right"
                                                    variant="body2"
                                                    // color="text.primary"
                                                >
                                                    {new Date(item.date['seconds'] * 1000).toLocaleDateString('ru-RU') }
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                    <TimelineConnector />
                                                    <TimelineDot>
                                                        <Avatar alt="Cindy Baker" src={item.picture} sx={{ width: 24, height: 24 }} />
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                    <Typography variant="h6" component="span">
                                                        {item.name_event}
                                                    </Typography>
                                                    <Typography>{item.name_event}</Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        })
                                    }
                                </Timeline>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}