import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Root } from "../Root";
import { Home } from "../pages/Home";
import { ROUTES } from "./ROUTES";
import { IndexRoute } from "./IndexRoute/IndexRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ROOT} element={<IndexRoute />} />
    </Route>
  )
)