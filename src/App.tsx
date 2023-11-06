import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FullPageLoader from "./components/FullPageLoader";

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FullPageLoader />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
