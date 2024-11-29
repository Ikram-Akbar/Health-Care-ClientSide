
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976D2', // Custom blue
        },
        secondary: {
            main: '#FF5722', // Custom deep orange
        },
        success: {
            main: '#4CAF50', // Custom green
        },
        warning: {
            main: '#FFC107', // Custom amber
        },
        error: {
            main: '#F44336', // Custom red
        },
        info: {
            main: '#2196F3', // Custom light blue
        }
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                color: 'primary',
                size: 'medium',
            },
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                margin: 'normal',
                fullWidth: true,
            },
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#1976D2',
                        },
                    },
                },
            },
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg',
                disableGutters: false,
            },
            styleOverrides: {
                root: {
                    paddingTop: '16px',
                    paddingBottom: '16px',
                },
            },
        },
        MuiCard: {
            defaultProps: {
                elevation: 4,
            },
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiAppBar: {
            defaultProps: {
                position: 'static',
                color: 'primary',
            },
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
    },
});

export default theme;
