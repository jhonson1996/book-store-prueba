import Routes from "./routes/Routes";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
   return (<Routes />);
}

export default App;
