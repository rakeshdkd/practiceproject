// import './App.css';
import UserList from "./Components/UserList";
import Form from "./Components/Form";
import { useState } from "react";
const App = () => {
  const [userData, setUserData] = useState([]);

  const formHandler = (uName, uAge, cName) => {
    setUserData((prevUdata) => {
      return [
        ...prevUdata,
        {
          name: uName,
          age: uAge,
          collegeName: cName,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <>
      <Form onAddUser={formHandler} />;
      <UserList users={userData} />
    </>
  );
};

export default App;
