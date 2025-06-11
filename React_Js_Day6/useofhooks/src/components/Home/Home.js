import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Mycontext from "../Context-store/MyContext";

const Home = (props) => {
  const ctx = useContext(Mycontext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back! </h1>
      <h6>{ctx.data.email}</h6>
    </Card>
  );
};

export default Home;
