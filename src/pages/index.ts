import React from "react";
export { HomePage } from "./home";

//Para emplear el lazy loading
//Lazy loading solo funciona con exportaciones por default
export const LoginPage = React.lazy(() => import("./login"));

export const CharacterPage = React.lazy(() => import("./character"));
