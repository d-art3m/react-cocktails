import Cocktail from './Cocktail';
import NotFound from '../pages/NotFound';
import { Grid } from '@mui/material';

function Cocktails({ catalog }) {
  return catalog ? (
    <Grid container mb={2} spacing={1}>
      {catalog.map((item) => (
        <Cocktail key={item.idDrink} {...item} />
      ))}
    </Grid>
  ) : (
    <NotFound text="Nothing found" />
  );
}

export default Cocktails;
