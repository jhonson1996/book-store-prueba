import Keycloak from 'keycloak-js';
const _kc = new Keycloak({
  url: "https://auth.gyfted.io",
  realm: "certification",
  clientId: "bookstore-client",
});
/* const _kc = new Keycloak("https://auth.gyfted.io/bookstore-client/keycloak.json"); */


 /*  _kc
    .init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-check-sso.html",
      pkceMethod: "S256",
    })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
    })
    .catch(console.error);
 */

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback: any) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles: any) =>
  roles.some((role: any) => _kc.hasRealmRole(role));

export const UserService = {
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
};

export default _kc;
