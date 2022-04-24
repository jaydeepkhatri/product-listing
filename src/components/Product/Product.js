import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import images from '../../images/';


function Product({id, name, price, category, url}) {
    return(
        <Card>
            <CardMedia
                component="img"
                height="260"
                image= {images[id-1]}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2">
                {`₹${price}`}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Product;