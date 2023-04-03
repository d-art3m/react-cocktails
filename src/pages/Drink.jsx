import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCocktailById } from '../api';
import NotFound from './NotFound';
import Preloader from '../components/Preloader';
import {
  Typography,
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

function Drink() {
  const { id } = useParams();
  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCocktailById(id)
      .then((data) => {
        setLoading(true);
        setDrink(data.drinks ? data.drinks[0] : {});
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  return loading ? (
    <Preloader />
  ) : !drink.idDrink ? (
    <NotFound />
  ) : (
    <>
      <Box
        flexGrow={1}
        my={2}
        display="flex"
        alignItems="center"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      >
        <Box p={1} flexGrow={1} display="flex" flexDirection="column">
          <Typography
            variant="h2"
            component="div"
            textAlign="center"
            gutterBottom
          >
            {drink.strDrink}
          </Typography>
          <Typography variant="h5">Type: {drink.strAlcoholic}</Typography>
          <Typography variant="h5">Category: {drink.strCategory}</Typography>
          <Typography variant="h5">
            Instructions: {drink.strInstructions}
          </Typography>
        </Box>
        <Box
          component="img"
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          sx={{
            height: 350,
            maxWidth: 350,
          }}
        />
      </Box>
      <TableContainer component={Paper} sx={{ marginTop: 2, marginBottom: 2 }}>
        <Table sx={{ minWidth: 350 }}>
          <TableHead>
            <TableRow sx={{ th: { fontWeight: 800 } }}>
              <TableCell>Ingredient</TableCell>
              <TableCell>Measure</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(drink).map((key) => {
              if (key.includes('strIngredient') && drink[key]) {
                return (
                  <TableRow
                    key={key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{drink[key]}</TableCell>
                    <TableCell>{drink[`strMeasure${key.slice(13)}`]}</TableCell>
                  </TableRow>
                );
              }
              return null;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Drink;
