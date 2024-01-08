import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WishlistCard from './WishlistCard';

const Wishlist = ({wishlist}) => {
  return (
    <Grid container padding={2}>
        <Grid item xs={12}>
            <Typography variant="h6" component="p" color="text.primary" align='left' gutterBottom>
                Wishlist
            </Typography>
            <Grid container spacing={2}>
                {wishlist?.map(meal=><WishlistCard key={meal.idMeal} meal={meal} />)} 
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Wishlist