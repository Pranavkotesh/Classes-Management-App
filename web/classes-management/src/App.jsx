import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
//import AppMainBar from "./shared/components/AppMainBar";
import RoutesMain from "./shared/RoutesMain";
import { THEME } from "./styles";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div >
        <CssBaseline />
        <BrowserRouter>
          {/* {<AppMainBar/>} */}
          <RoutesMain />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
