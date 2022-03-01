import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/style.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { UserProvider } from './context/user_context';
import Loader from "./layouts/loader/Loader";

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <UserProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </UserProvider>
  </Suspense>,

  document.getElementById("root")
);

