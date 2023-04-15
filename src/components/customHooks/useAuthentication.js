import localStorage from "local-storage";

const useAuthentication = () => {
  const loginAuth = () => {
    localStorage.set("auth", true);
  };
  const logoutAuth = () => {
    localStorage.clear();
  };
  return {
    handleLogin: loginAuth,
    handleLogout: logoutAuth,
    Authentication: localStorage.get("auth"),
  };
};

export default useAuthentication;
