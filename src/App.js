import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import Drink from './pages/Drink';
import NotFound from './pages/NotFound';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#5fa463',
      main: '#388e3c',
      dark: '#27632a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#83e345',
      main: '#64dd17',
      dark: '#469a10',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Container component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/drink/:id" element={<Drink />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
