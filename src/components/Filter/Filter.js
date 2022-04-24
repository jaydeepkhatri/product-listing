import Slider from '@mui/material/Slider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from "@mui/system";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function valuetext(value) {
    return `₹ ${value}`;
}

function Filter({category, value, handleRange, handleCategory}) {
    const handleChange = (event, newValue) => {
        handleRange(newValue)
    };


    


    const [anchorEl, setAnchorEl] = useState(null);
    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
        const {category} = event.currentTarget.dataset;
        handleCategory(category);
        console.log(event.currentTarget.dataset)
    };

    return (
        <>
            <Box m={2}>
            <Container maxWidth="lg">
                <Grid container justifyContent="center" spacing={2}>
                    <Grid p={2} item xs={12} sm={6}>
                        ₹ Price Range ({`${value[0]} - ${value[1]}`})
                        <Slider
                            getAriaLabel={() => 'Price Range'}
                            value={value}
                            min={20}
                            max={500}
                            step={10}
                            color={"secondary"}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{color: "#000"}}
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            {category}
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={Boolean(open)}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose} data-category={"Fast-Food"}>Fast-Food</MenuItem>
                            <MenuItem onClick={handleClose} data-category={"Drinks"}>Drinks</MenuItem>
                            <MenuItem onClick={handleClose} data-category={"Fruits & Vegatables"}>Fruit & Vegatables</MenuItem>
                        </Menu>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            
            </Box>
        </>
    )
}

export default Filter;