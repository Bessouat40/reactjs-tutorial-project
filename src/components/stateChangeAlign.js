import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

const StateAlignExample = () => {
  const [number, setNumber] = useState(0);

  const onClick = () => {
    setNumber(number + 1);
  };

  const onReset = () => {
    setNumber(0);
  };

  return (
    <Stack direction="row" spacing={10} sx={{ alignItems: 'center' }}>
      <Button variant="contained" onClick={onClick}>
        Increase Value
      </Button>
      <Typography>{number}</Typography>
      <IconButton onClick={onReset}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default StateAlignExample;
