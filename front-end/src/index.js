import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./app/store";
import { ChakraProvider, theme } from "@chakra-ui/react";
import "@fortawesome/fontawesome-free/css/all.min.css";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
/>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
