import { getCookie } from "../helpers/getCookie";

const Auth = () => {
  return getCookie("token") == null ? true : false;
  //   return localStorage.getItem("token") ? true : false;
};

export { Auth };
