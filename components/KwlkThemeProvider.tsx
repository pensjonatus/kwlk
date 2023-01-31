import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/anaheim/400.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Anaheim", "sans-serif"].join(","),
    h2: {
      fontSize: 24,
      fontWeight: 600,
      marginBottom: '1rem'
    },
  },
  palette: {
    primary: {
      main: "#0097a7",
    },
    secondary: {
      main: "#d81b60",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
      },
    },
  },
});

export default function KwlkThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
