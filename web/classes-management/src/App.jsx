import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import RoutesMain from "./shared/RoutesMain";
import { THEME } from "./styles";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <BrowserRouter>
          {/* <HeaderMain /> */}
          <RoutesMain />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
