import { Navigate } from "react-router-dom";
import { ROUTES } from "../ROUTES";

export const IndexRoute: React.FC = () => <Navigate to={ROUTES.HOME} />;
