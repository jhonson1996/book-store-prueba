import { useKeycloak } from "@react-keycloak/web";

type Props = {
    children: JSX.Element,
  };

const PrivateRoute = ({ children }:Props) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? children : null;
};

export default PrivateRoute;