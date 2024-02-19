import { useEffect, useState } from "react";

export const useUserLogged = () => {
  const [userLogged, setUserLogged] = useState(
    localStorage.getItem("isLoggedIn")
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", userLogged);
  }, [userLogged]);
  return [userLogged, setUserLogged];
};

export const useEmployeeOptionVisibility = () => {
  const [isEmployeeOptionVisible, setIsEmployeeOptionVisible] = useState(false);
  const [userLogged, _] = useUserLogged();

  useEffect(() => {
    const flagFromLocalStorage = localStorage.getItem("isLoggedIn");
    setIsEmployeeOptionVisible(flagFromLocalStorage === "true");
  }, [userLogged]);

  return isEmployeeOptionVisible;
};
