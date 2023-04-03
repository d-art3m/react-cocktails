import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h4"
          color="inherit"
          noWrap
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none' }}
        >
          Cocktails
        </Typography>
        <Link
          variant="button"
          color="inherit"
          href="https://github.com/d-art3m/react-cocktails"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: 'none' }}
        >
          About
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
