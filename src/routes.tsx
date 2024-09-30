import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import GameDetails from "./pages/GameDetails";
import Home from "./pages/Home";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />, errorElement: <Error /> },
      { path: "games/:slug", element: <GameDetails /> },
    ],
  },
]);

export default router;
