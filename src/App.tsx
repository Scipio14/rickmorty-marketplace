import "./App.css";
import { Container, Button } from "@mui/material";
import { Navbar } from "common/Navbar";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "router";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
