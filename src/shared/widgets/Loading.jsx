import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', width:'100%',minHeight:'80vh'}}>
      <CircularProgress />
    </Box>
  );
}
