import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/Home";
import Form from "../pages/Form";
import UserProvider from "../components/UserProvider";
import MainPage from "../MUI/pages/MainPage"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "app",
          element: <UserProvider />,
        },
        {
          path: "mui",
          element: <MainPage />,
        },
      ],
    },
  ]);
  export default router;