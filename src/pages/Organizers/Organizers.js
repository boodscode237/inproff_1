import {useState, useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../utils/firebase/firebase-utils";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography
} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";


export default function Organizers() {

    const [organizers, setOrganizers] = useState([])
    const organizerCollectionRef = collection(db, 'organizers')

    const getOrganizers = async() => {
        const data = await getDocs(organizerCollectionRef)
        console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        setOrganizers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

    }
    useEffect(() => {

        getOrganizers().then(data => {
            console.log('Organizers data fetched')
            console.log(organizers)
        })
    }, [])
    return (
        <div className="organizers">
            <React.Fragment>
                <Container>
                    <Typography variant="h2">
                        Организаторы
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
                                    {
                                        organizers.map((item) => {
                                            return <Grid container>
                                                <Grid item xs={8}>
                                                    <Card sx={{ maxWidth: 345 }} key={item.id}>
                                                        <CardActionArea>
                                                            <CardMedia
                                                                component="img"
                                                                height="140"
                                                                image={item.logo}
                                                                alt="green iguana"
                                                            />
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" color="text.primary">
                                                                    {item.name}
                                                                </Typography>
                                                                <Typography gutterBottom variant="h5" color="text.primary">
                                                                    {item.role}
                                                                </Typography>
                                                                {/*<Typography gutterBottom variant="h5" color="text.primary">*/}
                                                                {/*    {item.phoneNumber}*/}
                                                                {/*</Typography>*/}
                                                                {/*<Typography gutterBottom variant="h5" color="text.primary">*/}
                                                                {/*    {item.email}*/}
                                                                {/*</Typography>*/}
                                                            </CardContent>
                                                        </CardActionArea>
                                                        <CardActions>
                                                            <Button size="small" onClick={() => window.location = `mailto:${item.email}`}>
                                                                Пишите организатору
                                                            </Button>
                                                            <Button size="small" onClick={() => window.location = `tel:${item.phoneNumber}`}>Позвонить организатору</Button>
                                                        </CardActions>
                                                    </Card>
                                                </Grid>
                                            </Grid>
                                        })
                                    }
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    )
}