import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "@/app/layout/layout.tsx";
import ErrorsPage from "@/pages/ErrorsPage/ErrorsPage.tsx";
import MainPage from "@/pages/MainPage/MainPage.tsx";
import TopPage from "@/pages/TopPage/TopPage.tsx";
import TopMsgPage from "@/pages/TopByMessagesPage/TopMsgPage.tsx";
import ValoPlayerPage from "@/pages/ValoPlayerPage/ValoPlayerPage.tsx";
import BestGifPage from "@/pages/BestGifferPage/BestGifPage.tsx";
import ImportantPersonPage from "@/pages/ImportantPersonPage/ImportantPersonPage.tsx";
import BestPersonTestPage from "@/pages/BestPersonTestPage/BestPersonTestPage.tsx";
import IntroductionPage from "@/pages/IntroductionPage/IntroductionPage.tsx";
import PingBoyPage from "@/pages/PingBoyPage/PingBoyPage.tsx";
import ImmortalPlayerPage from "@/pages/ImmortalPlayerPage/ImmortalPlayerPage.tsx";
import VandalBroPage from "@/pages/VandalBroPage/VandalBroPage.tsx";
import ChameleonPage from "@/pages/ChameleonPage/ChameleonPage.tsx";
import FilmLoverPage from "@/pages/FilmLoverPage/FilmLoverPage.tsx";
import JettMainPlayerPage from "@/pages/JettMainPlayerPage/JettMainPlayerPage.tsx";
import LoverBoyPage from "@/pages/LoverBoyPage/LoverBoyPage.tsx";
import YourStatsPage from "@/pages/YourStatsPage/YourStatsPage.tsx";

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
        path: "/person-of-the-year",
        element: <BestPersonTestPage />,
      },
      {
        path: "/introduction",
        element: <IntroductionPage />,
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
      {
        path: "/ping",
        element: <PingBoyPage />,
      },
      {
        path: "/immo-player",
        element: <ImmortalPlayerPage />,
      },
      {
        path: "/vandal-bro",
        element: <VandalBroPage />,
      },
      {
        path: "/chameleon",
        element: <ChameleonPage />,
      },
      {
        path: "/film-lover",
        element: <FilmLoverPage />,
      },
      {
        path: "/jett-baiter",
        element: <JettMainPlayerPage />,
      },
      {
        path: "/lover-boy",
        element: <LoverBoyPage />,
      },
      {
        path: "/your-stats",
        element: <YourStatsPage />,
      },
    ],
  },
]);

export default routes;
