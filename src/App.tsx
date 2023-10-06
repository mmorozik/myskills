import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/router";
import { Header } from "./Header";

export const App = () => (
  <div>
    <Header />
    <RouterProvider router={router} />
  </div>
);
