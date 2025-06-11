import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Mycontext from "./components/Context-store/MyContext";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [data, setData] = useState({});

  const ctx=useContext(Mycontext);
 

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("IsLoggedIn", "1");
  //   setIsLoggedIn(true);
  //   //send
  //   setData({
  //     email: email,
  //     password: password,
  //   });
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("IsLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

//I am get data from Login page and send to Home page using props drill
//Login->app.js->Home
//Now using App context send data directly from login to Home by skipping App.js
