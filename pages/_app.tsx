import "../styles/globals.css";
import { AppProps } from "next/app";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import KwlkThemeProvider from "../components/KwlkThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <KwlkThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Component {...pageProps} />
      </LocalizationProvider>
    </KwlkThemeProvider>
  );
}
