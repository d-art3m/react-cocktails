import { Typography } from '@mui/material';

function NotFound({ text = 'Page not found!' }) {
  return (
    <Typography variant="h3" align="center" mt={2}>
      {text}
    </Typography>
  );
}

export default NotFound;
