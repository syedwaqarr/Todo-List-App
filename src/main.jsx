import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
