import "./App.css";
import Header from "./components/Header/Header";
import { styled } from "@mui/material";
import Dashboard from "./components/Dashboard/Dashboard";
import { useEffect } from "react";
const Box = styled("div")(() => ({
  padding: "2rem",
}));

document.body.style.backgroundColor = "rgb(250, 250, 250)";

function App() {
  useEffect(() => {
    [...document.getElementsByTagName("div")].map((element) => {
      if (
        getComputedStyle(element, null).getPropertyValue("position") === "fixed"
      ) {
        document.body.removeChild(element);
      }
    });
  }, []);

  return (
    <Box>
      <Header />
      <Dashboard />
    </Box>
  );
}

export default App;
