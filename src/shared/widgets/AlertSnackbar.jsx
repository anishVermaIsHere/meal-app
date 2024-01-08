import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const AlertSnackbar = ({message}) => {
  return (
      <Stack sx={{ width: '100%'}} spacing={2}>
        <Alert severity="error">{message}</Alert>
      </Stack>
    
  )
}

export default AlertSnackbar