import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { differenceInMinutes } from "date-fns";

type CookiesType = {
  uid: string;
  loginTime: string;
  elapsedTime: string;
};


const useCookiesHooks = () => {
  const [cookies, setCookie, removeCookie] = useCookies<string, CookiesType>(['uid', 'loginTime', 'elapsedTime']);
  const navigate = useNavigate();
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
    navigate("/top");
  };

  const logOut = () => {
    removeCookie("uid");
    removeCookie("loginTime");
    removeCookie("elapsedTime");
    navigate("/login");
  };

  return { cookies, logIn, logOut, elapsedTime, updateSessionTime };
};

export default useCookiesHooks;