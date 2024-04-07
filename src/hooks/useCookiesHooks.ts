import { useCookies } from "react-cookie";
import { differenceInMinutes } from "date-fns";

type CookiesType = {
  uid: string;
  loginTime: string;
  elapsedTime: string;
};


const useCookiesHooks = () => {
  const [cookies, setCookie, removeCookie] = useCookies<string, CookiesType>(['uid', 'loginTime', 'elapsedTime']);
  const timeoutMinutes = 180;

  const elapsedTime = () => {
    setCookie("elapsedTime", new Date());
    if (cookies.loginTime !== undefined && cookies.elapsedTime !== undefined) {
      const SessionElapsedMinutes = differenceInMinutes(new Date(cookies.elapsedTime), new Date(cookies.loginTime));
      if (SessionElapsedMinutes >= timeoutMinutes) {
        logOut();
        return;
      } else {
        return
      }
    }
    logOut();
  };

  const updateSessionTime = () => {
    setCookie("loginTime", new Date());
  };

  const logIn = (uid: string) => {
    setCookie("uid", uid);
    setCookie("loginTime", new Date());
  };

  const logOut = () => {
    removeCookie("uid");
    removeCookie("loginTime");
    removeCookie("elapsedTime");
  };

  return { cookies, logIn, logOut, elapsedTime, updateSessionTime };
};

export default useCookiesHooks;