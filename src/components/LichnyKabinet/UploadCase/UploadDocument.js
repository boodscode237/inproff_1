import LichnyKabinet from "../ParticipantPage/ParticipantPage";
import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
export default function UploadCase(){
    return(
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label">
                Upload
                <input hidden accept="pdf/*" multiple type="file" />
                <input hidden accept="pptx/*" multiple type="file" />
                <input hidden accept="jpg/*" multiple type="file" />
                <input hidden accept="jpeg/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
            </IconButton>
        </Stack>
    )
}