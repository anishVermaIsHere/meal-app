import {useContext} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MealContext from '../../context/MealContext';
import CloseIcon from '@mui/icons-material/Close';

const WishlistCard = ({meal}) => {
    const {removeFromWishlist}=useContext(MealContext);
  return (
    <Grid item xs={4} sm={3} md={2}>
        <Card sx={{ maxWidth: '100%'}}>
          <CardMedia
            sx={{ height: 80 }}
            image={meal.strMealThumb}
            title={meal.strMeal}
          />
          <Box sx={{display:'flex', justifyContent:{xs:'end',sm:'space-between'}, alignItems:'center'}}>
            <Typography gutterBottom variant="p" component="p" sx={{display:{xs:'none',sm:'block'}, paddingLeft:'0.8rem'}}>
              {meal.strMeal}
            </Typography>

            <CloseIcon size="small" sx={{cursor:'pointer'}} onClick={()=>removeFromWishlist(meal.idMeal)} />
          </Box>

        </Card>
    </Grid>
  )
}

export default WishlistCard