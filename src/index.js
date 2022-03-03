import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/style.scss";
import App from "./App";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { UserProvider } from './context/user_context';
import Loader from "./layouts/loader/Loader";

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </UserProvider>
  </Suspense>,

  document.getElementById("root")
);

