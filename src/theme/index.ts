import { createTheme } from '@mui/material/styles';
import type { Theme } from "@mui/material/styles";

const theme:Theme  = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;