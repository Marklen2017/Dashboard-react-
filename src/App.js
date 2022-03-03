// import { useRoutes } from "react-router-dom";
// import Themeroutes from "./routes/Router";

import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginUi from "./views/ui/LoginUi";
import Expansions from "./views/ui/Expansions";
import Media from "./views/ui/Media";
import Tweet from "./views/ui/Tweet";
import Search from "./views/ui/Search";
import Conversation from "./views/ui/Conversation";
import User from "./views/ui/User";
import FullLayout from "./layouts/FullLayout";
import { Navigate } from "react-router-dom";
import Saved from "./views/ui/Saved";

const App = () => {
  const userLogin = localStorage.getItem("user");
  return (
  <Routes>
      <Route path="/" element={<FullLayout />}>
        <Route index  element={ userLogin ?  <Navigate  to='/search'/> : <LoginUi />} />
        <Route path="/expansions" element={<Expansions />} />
        <Route path="/media" element={<Media />} />
        <Route path="/tweet" element={<Tweet />} />
        <Route path="/search" element={<Search />} />
        <Route path="/conversation" element={<Conversation />} />
        <Route path="/user" element={<User />} />
        <Route path="/saved" element={<Saved />} />
      </Route>
</Routes>);

};
export default App;