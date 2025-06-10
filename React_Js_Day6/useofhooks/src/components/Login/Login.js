import React, { useState, useEffect, useRef, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Mycontext from "../Context-store/MyContext";

const Login = (props) => {
  const ctx = useContext(Mycontext);
  const emailref = useRef();
  const passsref = useRef();

  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [emailIsValid, setemailIsValid] = useState();
  const [passwordIsValid, setpasswordIsValid] = useState();
  const [formIsValid, setformIsValid] = useState(false);

  useEffect(() => {
    setformIsValid(emailIsValid && passwordIsValid);
  }, [passwordIsValid, emailIsValid]);

  useEffect(() => {
    emailref.current.focus();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!passwordIsValid) {
      passsref.current.focus();
    } else if (!emailref) {
      emailref.current.focus();
    } else {
      ctx.onLogin(enteredEmail, enteredPassword);
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            ref={emailref}
            type="email"
            id="email"
            value={enteredEmail}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            onBlur={() => {
              setemailIsValid(enteredEmail.includes("@"));
            }}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            ref={passsref}
            type="password"
            id="password"
            value={enteredPassword}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            onBlur={() => {
              setpasswordIsValid(enteredPassword.trim().length > 6);
            }}
          />
          {passwordIsValid === false && (
            <p>
              <h6>Password must be more than 6 characters.</h6>
            </p>
          )}
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
