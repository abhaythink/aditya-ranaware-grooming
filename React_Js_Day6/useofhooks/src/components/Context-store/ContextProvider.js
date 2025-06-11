import Mycontext from "./MyContext";
import { useEffect, useState } from "react";

const ContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState({});

   useEffect(() => {
      const StoredIsLoggedIn = localStorage.getItem("IsLoggedIn");
  
      if (StoredIsLoggedIn === "1") {
        setIsLoggedIn(true);
      }
    }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("IsLoggedIn", "1");
    setIsLoggedIn(true);
    //send
    setData({
      email: email,
      password: password,
    });
  };

  const logoutHandler = () => {
    localStorage.removeItem("IsLoggedIn");
    setIsLoggedIn(false);
    setData({});
  };

  return (
    <Mycontext.Provider
      value={{
        isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        data,
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
};
export default ContextProvider;
