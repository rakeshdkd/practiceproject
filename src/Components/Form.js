import { useState } from "react";
import "./Form.css";
import ErrorModal from "./ErrorModal";
import Wrapper from "./Helpers/Wrapper";

const Form = (props) => {
  // const [userData, setUserData] = useState([{ username: "", age: "" }]);

  const [enteredUname, setEnteredUname] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const unameInputHandler = (event) => {
    setEnteredUname(event.target.value);
  };
  const ageInputHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const formHandler = (event) => {
    event.preventDefault();
    // console.log( enteredUname, enteredAge);

    if (enteredUname.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Inavalid input 😠",
        messege: "Please neter a valid name and age (non-empty values).",
      });
      return;
    } else if (parseInt(enteredAge) < 1) {
      setError({
        title: "Inavalid age 😞",
        messege: "Please neter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUname, enteredAge);
    setEnteredAge("");
    setEnteredUname("");
  };
  const errorHandler = () => {
    setError(null);
  };


  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          messege={error.messege}
          onConfirm={errorHandler}
        />
      )}
      <h2>Practice project</h2>
      <div className="main_div">
        <form action="" onSubmit={formHandler} className="frm">
          <div className="username">
            <label>Username</label>
            <input
              name="username"
              onChange={unameInputHandler}
              value={enteredUname}
              type="text"
            ></input>
          </div>
          <div className="age">
            <label>Age (Years)</label>
            <input
              name="age"
              onChange={ageInputHandler}
              value={enteredAge}
              type="number"
            ></input>
          </div>
          <div className="btn">
            <button type="submit">Add User</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Form;
