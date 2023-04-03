import React, { useState } from 'react';
import Preloader from '../components/Preloader';
import Cocktails from '../components/Cocktails';
import Search from '../components/Search';
import { searchCocktails } from '../api';

function Main() {
  const [loading, setLoading] = useState(true);
  const [catalog, setCatalog] = useState([]);

  const search = (val) => {
    setLoading(true);
    searchCocktails(val)
      .then((data) => {
        setCatalog(data.drinks);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Search search={search} />
      {loading ? <Preloader /> : <Cocktails catalog={catalog} />}
    </>
  );
}

export default Main;
