import { RouterProvider } from "react-router-dom";
import routes from "@/app/router";

const App = () => (
  <>
    <RouterProvider router={routes} />
  </>
);

export default App;
