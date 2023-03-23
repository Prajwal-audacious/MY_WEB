import React from "react";

import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Singnup from "./pages/Singnup";
import Todo from "./pages/Todo";
import Home from "./pages/home";
import Error from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Singnup />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
