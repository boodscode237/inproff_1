import LichnyKabinet from "../ParticipantPage/ParticipantPage";
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';

export default function DownloadCase(){
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
        setLoading(true);
    }

    return(
        <Box>
            <FormControlLabel
                sx={{
                    display: 'block',
                }}
                control={
                    <Switch
                        checked={loading}
                        onChange={() => setLoading(!loading)}
                        name="loading"
                        color="primary"
                    />
                }
                label="Loading"
            />
            <LoadingButton
                color="secondary"
                onClick={handleClick}
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
            >
                <span>Save</span>
            </LoadingButton>
        </Box>
    )
}