import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
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
  palette: {
    primary: {
      main: '#0E7CF4',
    },
    success: {
      main: '#01875F',
    },
  },
  components: {
    // Name of the component
    MuiFilledInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          height: '64px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          '&::before': {
            borderBottom: 'none',
          },
          '&::after': {
            borderBottom: 'none',
          },
          '&.Mui-disabled:before': {
            borderBottom: 'none !important',
          },
          '& .MuiInputAdornment-root': {
            '& .MuiTypography-root': {
              color: '#000000',
              fontWeight: 600,
              fontSize: '1.125rem',
              lineHeight: '1.125rem',
            },
          },
        },

        input: {
          '&.MuiInputBase-input': {
            fontSize: '1.125rem',
            fontWeight: 600,
            padding: '0px 9px 0px 9px !important',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: '0px !important',
            },
          },
          '&.Mui-disabled': {
            textFillColor: 'unset',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          margin: '30px 0px 0px 0px',
        },
        rail: {
          color: '#C4C4C4',
        },
        mark: {
          color: 'transparent',
        },
        markLabel: {
          top: -27,
          color: '#000000',
          fontWeight: 600,
          fontSize: '1.125rem',
          '&[data-index="0"]': {
            transform: 'translateX(0%)',
          },
          '&[data-index="1"]': {
            transform: 'translateX(-100%)',
          },
          '@media (max-width: 650px)': {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: '18px',
            top: -27,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontSize: '1.125rem',
          '&.MuiInputBase-input': {
            padding: '0px 32px 0px 9px !important',
            lineHeight: '64px',
            borderRadius: '10px 10px 0 0',
            width: '157px',
            color: '#0962EA',
            boxSizing: 'border-box',
            '@media (max-width: 700px)': {
              width: '100%',
              minWidth: '157px',
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingLeft: '9px',
          lineHeight: '47px',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#000000',
          fontSize: '1.125rem',
          fontWeight: 600,
          lineHeight: '25px',
          '@media (max-width: 650px)': {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: '18px',
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginTop: '0 !important',
        },
      },
    },
  },
});

export default theme;
