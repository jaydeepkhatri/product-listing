import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import images from '../../images/';

function Banner() {
    return(
        <>
            <Box display="flex" alignItems="center" justifyContent="center" sx={{minHeight: "450px", backgroundImage: `url(${images[13]})`, backgroundSize: "cover", color: "#FFF" }}>
            <Typography variant="h2" component="div">
                Khana-Khazana 
            </Typography>
            </Box>
        </>
    )
}

export default Banner;