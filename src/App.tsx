import './Global.css'
import { Home } from "./pages/Home";
import { defaultTheme } from "./style/theme.ts";
import { ThemeProvider } from "styled-components";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Home/>
    </ThemeProvider>
  )
}

export default App
