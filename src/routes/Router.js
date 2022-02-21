import { lazy } from "react";

const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

const Expansions = lazy(() => import("../views/ui/Expansions"));
const Media = lazy(() => import("../views/ui/Media"));
const Tweet = lazy(() => import("../views/ui/Tweet"));
const Search = lazy(() => import("../views/ui/Search"));
const Conversation = lazy(() => import("../views/ui/Conversation"));
const User = lazy(() => import("../views/ui/User"));
const Saved = lazy(() => import("../views/ui/Saved"));
const LoginUi = lazy(() => import("../views/ui/LoginUi"));

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", exact: true, element: <LoginUi /> },
      { path: "/expansions", exact: true, element: <Expansions /> },
      { path: "/media", exact: true, element: <Media /> },
      { path: "/tweet", exact: true, element: <Tweet /> },
      { path: "/search", exact: true, element: <Search /> },
      { path: "/conversation", exact: true, element: <Conversation /> },
      { path: "/user", exact: true, element: <User /> },
      { path: "/saved", exact: true, element: <Saved /> },
    ],
  },
];

export default ThemeRoutes;
