import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./sass/main.scss";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../src/keycloak";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  /* <React.StrictMode> */
  <ReactKeycloakProvider authClient={keycloak}>
    <Provider store={store}>
      <App />
    </Provider>
  </ReactKeycloakProvider>
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
