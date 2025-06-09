import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [userData, setuserData] = useState([]);

  const getData = (uname, uage) => {
    return setuserData((prevUserlist) => {
      return [...prevUserlist, { username: uname, age: uage,id:Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onDataSubmit={getData} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
