import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import '../../screens/Sales/Sales.css'
import {  Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Collapse from '@mui/material/Collapse';
export function WinterCard(props) {
    return(
        <div key={props.id}>
        <Grid item xs={3} md={10} lg={10} padding={1}>
        <Card sx={{ maxWidth: 350 }} padding={10}>
        <CardMedia
        component="img"
        height="194"
        src={props.image} 
       
        alt="Paella d ish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        R{props.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" >
          <ShoppingCartIcon />
        </IconButton>
        
      </CardActions>
     
                </Card>
                </Grid>
    </div>
    )
}