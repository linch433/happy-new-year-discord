import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "@/app/layout/layout.tsx";
import ErrorsPage from "@/pages/ErrorsPage/ErrorsPage.tsx";
import MainPage from "@/pages/MainPage/MainPage.tsx";
import TopPage from "@/pages/TopPage/TopPage.tsx";
import TopMsgPage from "@/pages/TopByMessagesPage/TopMsgPage.tsx";
import ValoPlayerPage from "@/pages/ValoPlayerPage/ValoPlayerPage.tsx";
import BestGifPage from "@/pages/BestGifferPage/BestGifPage.tsx";
import ImportantPersonPage from "@/pages/ImportantPersonPage/ImportantPersonPage.tsx";

const routes = createBrowserRouter([
  {
    path: "",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: <ErrorsPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/top",
        element: <TopPage />,
      },
      {
        path: "/top-msgs",
        element: <TopMsgPage />,
      },
      {
        path: "/valo-players",
        element: <ValoPlayerPage />,
      },
      {
        path: "/best-giffer",
        element: <BestGifPage />,
      },
      {
        path: "/important-clown",
        element: <ImportantPersonPage />,
      },
    ],
  },
]);

export default routes;
