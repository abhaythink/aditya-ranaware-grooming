import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error,setError]=useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
     setError({
      title:'Invalid input',
      message:'Please enter a valid name and age(non-empty values).'
     });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(Greater than 1).",
      });
      return;
    }

    // const updatedUserData=([...userData, { username: username, age: age }]);
    // setuserData(updatedUserData);

    props.onDataSubmit(username, age);
  };
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const ErrorHandler=()=>{
   setError(null);
  };
  return (
    <div>
      {error &&<ErrorModel title={error.title} message={error.message} onConfirm={ErrorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="text" value={age} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
