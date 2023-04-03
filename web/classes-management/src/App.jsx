import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import RoutesMain from "./shared/RoutesMain";
import { THEME } from "./styles";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div> 
        <CssBaseline />
        <BrowserRouter>
          <RoutesMain />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
