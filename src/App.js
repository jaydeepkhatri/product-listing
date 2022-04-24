import {Product, Navbar, Filter, Banner} from "./components";
import maindata from "./data/data.json";
import "./styles/main.css";
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
import {useState, useEffect} from "react";






function App() {

  //Web App Theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF1818",
      },
      secondary: {
        main: "#FFC300",
      },
    },
  });

  const [data, setData] = useState(maindata);
  const [range, setRange] = useState([20, 500]);
  const [category, setCategory] = useState("Categories");

  //Filter the value
  function filtervalue(value) {
    return value.price  >= range[0]
        ? value.price <= range[1]
          ? ((value.category == category) || (category == "Categories")) 
            ? value 
            :null 
          : null
        : null;
  }
  
  

  //Update the Data, Category when range is updated.
  useEffect(() => {
    setData(maindata.filter(filtervalue))
  }, [range, category])

  const handleRange = (range) => {
    setRange(range);
  }

  const handleCategory = (category) => {
    setCategory(category)
  }

  return (
    


    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Banner />
        <Filter category={category} value={range} handleRange={handleRange} handleCategory={handleCategory} />
        <Box m={2}>
          <Container maxWidth="lg" >
            <Grid container justifyContent="center" spacing={2}>
                {
                  data.length > 0 ?
                  (data.map((product, index) => (
                    <Grid item xs={12} sm={4} md={3} key={index}>
                      <Product key={product.id} {...product} />
                    </Grid>
                  ))) : <h2>Sorry, No product in this range 😔</h2>
                }
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </>
    
  );
}

export default App;
