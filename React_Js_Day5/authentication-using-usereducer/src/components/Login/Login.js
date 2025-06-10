import React, { useState, useEffect, useReducer} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
      type: "USER_INPUT",
    };
  }
  if (action.type === "ON_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
      type: "ON_BLUR",
    };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 6,
      type: "USER_INPUT",
    };
  }
  if (action.type === "ON_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
      type: "ON_BLUR",
    };
  }
  return { value: "", isValid: true, type: "" };
};

const Login = (props) => {


  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
    type: "",
  });
  const [passwordstate, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
    type: "",
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: PasswordIsValid } = passwordstate;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && PasswordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, PasswordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "ON_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "ON_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordstate.value);
  };

  return (
  
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${
              emailState.type === "ON_BLUR" && emailState.isValid === false
                ? classes.invalid
                : ""
            }`}
          >
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${classes.control} ${
              passwordstate.type === "ON_BLUR" &&
              passwordstate.isValid === false
                ? classes.invalid
                : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passwordstate.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button
              type="submit"
              className={classes.btn}
              disabled={!formIsValid}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
  );
};

export default Login;
