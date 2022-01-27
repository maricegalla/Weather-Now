import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#69A3FF",
    orange: "#FF9632",
    red:"ED1946",
    darkGray: "#737C84",
    mediumGray: "#B4B4B4",
    white: "#FFFFFF",
    lightGray: {
      shade1:"rgba(241, 241, 241, 0.5)",
      shade2:"#F1F1F1",
      shade3:"#EBEBEB",
      shade4:"rgba(51, 51, 51, 0.1)"
    }
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
