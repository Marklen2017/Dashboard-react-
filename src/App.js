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
import ProtectedRoute from "./views/ui/ProtectedRoute";
import { useUserContext } from "./context/user_context";

const App = () => {
  const userLogin = localStorage.getItem("user");
  const { userSuccess } = useUserContext();

  return (
    <Routes>
      <Route path="/" element={<FullLayout />}>
        <Route index element={<LoginUi />} />
        <Route
          path="/search"
          element={
            <ProtectedRoute user={userLogin}>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route
          path="/expansions"
          element={
            <ProtectedRoute user={userLogin}>
              <Expansions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/media"
          element={
            <ProtectedRoute user={userLogin}>
              <Media />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tweet"
          element={
            <ProtectedRoute user={userLogin}>
              <Tweet />
            </ProtectedRoute>
          }
        />
        <Route
          path="/conversation"
          element={
            <ProtectedRoute user={userLogin}>
              <Conversation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute user={userLogin}>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved"
          element={
            <ProtectedRoute user={userLogin}>
              <Saved />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
