import React from "react";
import "./UserList.css";
const UserList = (props) => {
  return (
    <ul className="user_list">
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} yeras old)
        </li>
      ))}
    </ul>
  );
};

export default UserList;
