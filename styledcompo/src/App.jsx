import React from "react";
import Home from "./components/Home";
import { GlobalS } from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";

const App = () => {
  const theme = {
    button: {
      radius: "5px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalS />
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
