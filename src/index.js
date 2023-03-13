import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Stack } from '@mui/system';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Stack sx={{ alignItems: 'center' }}>
    <App />
  </Stack>
);
