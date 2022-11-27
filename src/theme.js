import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        // fontFamily: `"Nunito Sans"`,
        h3: {
            fontWeight: '700',
        },
        h4: {
            fontWeight: '600',
            color: '#6E7491',
        },
        subtitle1: {
            fontSize: '18px',
            color: '#7C8DB0',
            marginBottom: '36px',
        },
    },
    palette: {
      primary: {
        main: "#605DEC",
      },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    width: 778,
                    marginLeft: 0,
                    paddingLeft: 96,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    margin: 24,
                    marginLeft: 0,
                    width: 200,
                    height: 48,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: 24,
                    marginLeft: 0,
                    width: 161,
                    height: 48,
                    textTransform: 'none',
                }
            }
        }
    }
  });

  export default theme;