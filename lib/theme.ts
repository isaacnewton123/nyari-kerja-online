'use client';

import { createTheme, alpha } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6C63FF',
      light: '#8B83FF',
      dark: '#4A42D4',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00D9FF',
      light: '#33E1FF',
      dark: '#00A8C7',
      contrastText: '#0A0E1A',
    },
    background: {
      default: '#0A0E1A',
      paper: '#111827',
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    },
    divider: 'rgba(255, 255, 255, 0.06)',
    error: {
      main: '#FF6B6B',
    },
    warning: {
      main: '#FFB347',
    },
    success: {
      main: '#4ADE80',
    },
    info: {
      main: '#38BDF8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#CBD5E1',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#94A3B8',
    },
    button: {
      textTransform: 'none' as const,
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: '#1E293B #0A0E1A',
          '&::-webkit-scrollbar': {
            width: 8,
          },
          '&::-webkit-scrollbar-track': {
            background: '#0A0E1A',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#1E293B',
            borderRadius: 4,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontSize: '0.9375rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          boxShadow: `0 4px 14px ${alpha('#6C63FF', 0.35)}`,
          '&:hover': {
            boxShadow: `0 6px 20px ${alpha('#6C63FF', 0.5)}`,
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: alpha('#6C63FF', 0.4),
          '&:hover': {
            borderColor: '#6C63FF',
            backgroundColor: alpha('#6C63FF', 0.08),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: alpha('#FFFFFF', 0.04),
          backdropFilter: 'blur(20px)',
          border: `1px solid ${alpha('#FFFFFF', 0.06)}`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: alpha('#FFFFFF', 0.07),
            border: `1px solid ${alpha('#6C63FF', 0.3)}`,
            transform: 'translateY(-4px)',
            boxShadow: `0 20px 40px ${alpha('#000000', 0.3)}, 0 0 40px ${alpha('#6C63FF', 0.08)}`,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '0.8125rem',
        },
        filled: {
          backgroundColor: alpha('#6C63FF', 0.15),
          color: '#8B83FF',
          '&:hover': {
            backgroundColor: alpha('#6C63FF', 0.25),
          },
        },
        outlined: {
          borderColor: alpha('#6C63FF', 0.3),
          '&:hover': {
            backgroundColor: alpha('#6C63FF', 0.08),
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: alpha('#FFFFFF', 0.04),
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: alpha('#6C63FF', 0.5),
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#6C63FF',
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#0A0E1A', 0.8),
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${alpha('#FFFFFF', 0.06)}`,
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#111827',
          borderRight: `1px solid ${alpha('#FFFFFF', 0.06)}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: alpha('#FFFFFF', 0.06),
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          color: '#475569',
        },
      },
    },
  },
});

export default theme;
