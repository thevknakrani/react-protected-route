import localStorage from "local-storage";

const useAuthorization = () => {
  const assignRole = (val) => {
    localStorage.set("userRole", val);
  };
  const assignCompRole = (val) => {
    localStorage.set("compRole", val);
  };

  return {
    assignRole,
    assignCompRole
  };
};

export default useAuthorization;
