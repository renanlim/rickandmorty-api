import { createBrowserRouter } from "react-router-dom";
import Private from "../Private/Private";
import Loginn from "../Layout/ScreenLogin";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Loginn />
  },
  {
    path: "/",
    element: <Private />,
  },
]);

export default router;