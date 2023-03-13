import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const StateExample = () => {
  const [number, setNumber] = useState(0);

  const onClick = () => {
    setNumber(number + 1);
  };

  const onReset = () => {
    setNumber(0);
  };

  return (
    <div>
      <Button variant="contained" onClick={onClick}>
        Increase Value
      </Button>
      <Typography>{number}</Typography>
      <IconButton onClick={onReset}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default StateExample;
