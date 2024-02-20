import { useEffect, useState } from "react";

export const useUserLogged = () => {
    const [userLogged, setUserLogged] = useState(
        sessionStorage.getItem("isLoggedIn")
    );

    useEffect(() => {
        sessionStorage.setItem("isLoggedIn", userLogged);
    }, [userLogged]);
    return [userLogged, setUserLogged];
};

export const useIsAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [userLogged, _] = useUserLogged();

    useEffect(() => {
        const isAdmin = sessionStorage.getItem("isAdmin");
        setIsAdmin(isAdmin === "true");
    }, [userLogged]);

    return isAdmin;
};

export const useIsLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userLogged, _] = useUserLogged();

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        setIsLoggedIn(isLoggedIn === "true");
    }, [userLogged]);

    return isLoggedIn;
};
