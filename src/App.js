import { BrowserRouter } from "react-router-dom";
import { useRouter } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import NavBar from "./components/navBar/NavBar";

const theme = createTheme();

function App() {
  const { token, login, logout, userId, userName } = useAuth();
  const isAuth = !!token;
  const routes = useRouter(isAuth);
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuth, userName }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {isAuth ? <NavBar /> : null}
          {routes}
        </BrowserRouter>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
