import Chip from '@mui/material/Chip';

export default function MealChip({label}) {
  return (
      <Chip label={label} variant="outlined" size="small" sx={{margin:'0.3rem', textTransform:'lowercase'}} />
  );
}
