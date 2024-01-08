import { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MealContext from '../../context/MealContext';
import Card from '@mui/material/Card';
import MealChip from './MealChip';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:'80%', sm:400, md:400},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const MealModal = () => {
  const {isOpen, setIsOpen, selectedMeal, setSelectedMeal}=useContext(MealContext);

  const handleClose=()=>{
    setIsOpen(!isOpen);
    setSelectedMeal(null);
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Card sx={{ maxWidth: '100%' }}>
          <Typography component="div" variant="div" sx={{display:'flex', justifyContent:'right', pb:1}} >
            <CloseIcon  sx={{cursor:'pointer'}} onClick={handleClose}/>
          </Typography>
          <CardMedia
            sx={{ height: 200 }}
            image={selectedMeal.strMealThumb}
            title={selectedMeal.strMeal}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5" sx={{display:'flex', justifyContent:'space-between'}}>
              {selectedMeal.strMeal}

              {selectedMeal.strSource?<a href={selectedMeal.strSource} title={selectedMeal.strSource} style={{fontSize:'1rem'}}>Original source</a>:""}
            </Typography>

            <Box sx={{mb:'1rem'}}>
              <Typography variant="p" component="p">
                Ingredients
              </Typography>

              <Stack direction="row" spacing={1} sx={{display:'flex', flexWrap:'wrap', marginTop:'0.5rem'}}>
                <MealChip label={selectedMeal.strIngredient1} />
                <MealChip label={selectedMeal.strIngredient2} />
                <MealChip label={selectedMeal.strIngredient3} />
              </Stack>
            </Box>

            <Box sx={{mb:'1rem'}}>
              <Typography variant="p" component="p">
                Instructions
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow:'hidden'
                }}>
                {selectedMeal.strInstructions}
              </Typography>
            </Box>
          </CardContent>
        </Card>
        </Box>
      </Modal>
    </div>
  )
}

export default MealModal