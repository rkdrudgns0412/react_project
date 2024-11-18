import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../RootLayout";
import NowPlaying from "../pages/NowPlaying";
import Popular from "../pages/Popular";
import TopRated from "../pages/TopRated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/nowplaying",
        element: <NowPlaying />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/toprated",
        element: <TopRated />,
      },
    ],
  },
]);

export default router;