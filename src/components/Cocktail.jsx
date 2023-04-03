import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

function Cocktail(props) {
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: type,
    strCategory: category,
  } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 480 }}>
        <CardMedia sx={{ height: 320 }} image={image} title={name} />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" component={RouterLink} to={`/drink/${id}`}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Cocktail;
