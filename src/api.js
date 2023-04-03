const API_URL = `https://www.thecocktaildb.com/api/json/v1/${process.env.REACT_APP_API_KEY}`;

const searchCocktails = async (val) => {
  const response = await fetch(`${API_URL}/search.php?s=${val}`);
  return await response.json();
};

const getCocktailById = async (cocktailId) => {
  const response = await fetch(`${API_URL}/lookup.php?i=${cocktailId}`);
  return await response.json();
};

export { searchCocktails, getCocktailById };
