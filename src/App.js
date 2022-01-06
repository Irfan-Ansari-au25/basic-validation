import React, { useState } from "react";
import Wrapper from "./components/helpers/Wrapper";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((preState) => {
      // console.log("here");
      return [
        ...preState,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </Wrapper>
  );
}

export default App;
