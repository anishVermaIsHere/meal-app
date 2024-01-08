import {useContext} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MealChip from './MealChip';
import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MealContext from '../../context/MealContext';

const MealCard = ({meal}) => {    
  const { isOpen, setIsOpen, setSelectedMeal, addToWishlist}=useContext(MealContext);

  const showMealInfo=()=>{
    setIsOpen(!isOpen);
    setSelectedMeal(meal);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: '100%' }}>
          <CardMedia
            sx={{ height: 200 }}
            image={meal.strMealThumb}
            title={meal.strMeal}
            onClick={showMealInfo}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              {meal.strMeal}
            </Typography>

            <Stack direction="row" spacing={1} sx={{display:'flex', flexWrap:'wrap', marginTop:'0.5rem'}}>
              <MealChip label={meal.strIngredient1} />
              <MealChip label={meal.strIngredient2} />
              <MealChip label={meal.strIngredient3} />
            </Stack>
          </CardContent>


          <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
            <Button size="small"  variant='outlined' onClick={showMealInfo}>
              Show more
            </Button>
            <FavoriteBorderIcon sx={{cursor:'pointer'}} onClick={()=>addToWishlist(meal)} />
          </CardActions>
        </Card>
    </Grid>
        
  )
}

export default MealCard