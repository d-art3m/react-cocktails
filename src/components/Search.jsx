import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

function Search({ search }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    search(value);
  }, [value]);

  return (
    <TextField
      type="search"
      placeholder="Search"
      autoFocus={true}
      fullWidth={true}
      sx={{ my: 2 }}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export default Search;
