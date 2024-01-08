import {useContext} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MealCard from './MealCard';
import MealContext from '../../context/MealContext';
import Loading from '../../shared/widgets/Loading';
import AlertSnackbar from '../../shared/widgets/AlertSnackbar';
import MealModal from './MealModal';

const MealList=()=>{
  const {meals, error, loading, isOpen}=useContext(MealContext);
  const sorted=meals.sort((a,b)=>a-b?1:-1)
    if(loading){
      return <Loading />
    } else if (error.message){
      return <AlertSnackbar message={error.message} />
    } else {
      return meals!==null?<Box sx={{ flexGrow: 1}}>
                <Grid container>
                <Grid item xs={12} md={12} padding={2} sx={{paddingLeft:'1rem'}}>
                    <Typography variant="h5" component="h5" color="text.primary" align='left' gutterBottom>
                    Meals
                    </Typography>
                    <Grid container spacing={2}>
                      {sorted?.map(meal=><MealCard key={meal.idMeal} meal={meal} />)} 
                    </Grid>
                </Grid>
                {isOpen&&<MealModal />}
            </Grid>
          </Box>:
          <AlertSnackbar message="No meals found" />
    }

}

export default MealList;