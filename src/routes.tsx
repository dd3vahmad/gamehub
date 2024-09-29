import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import GameDetails from "./pages/GameDetails";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "games/:id", element: <GameDetails /> },
    ],
  },
]);

export default router;
