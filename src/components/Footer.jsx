import { Typography, Link, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        color: 'primary.contrastText',
        bgcolor: 'primary.main',
      }}
    >
      <Typography variant="body2" align="center">
        {'© '}
        {new Date().getFullYear()}{' '}
        <Link
          color="inherit"
          href="https://github.com/d-art3m/react-cocktails"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cocktails
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
