import LichnyKabinet from "../ParticipantPage/ParticipantPage";
import {Box, Container, Grid} from "@mui/material";
import * as React from 'react';

export default function ChatBot(){
    return(
        <LichnyKabinet>
            <React.Fragment>
                <Container>
                    <Box sx={{ bgcolor: '##559db8', height: '100vh' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box
                                    display="flex"
                                    // justifyContent="center"
                                    // alignItems="center"
                                    // minHeight="100vh"
                                    sx={{
                                        // alignItem: 'center',
                                        // backgroundColor: '#559db8',
                                        // '&:hover': {
                                        //     backgroundColor: 'primary.main',
                                        //     opacity: [0.9, 0.8, 0.7],
                                        // },
                                    }}
                                >
            bhuhbu
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>
        </LichnyKabinet>
    )
}