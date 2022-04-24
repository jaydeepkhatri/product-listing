import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import FastfoodIcon from '@mui/icons-material/Fastfood';

function Navbar() {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={2}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <FastfoodIcon />
          </Typography>
          <Button color="inherit">
              <GitHubIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar;