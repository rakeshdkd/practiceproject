import { useRef, useState } from "react";
import "./Form.css";
import ErrorModal from "./ErrorModal";
import Wrapper from "./Helpers/Wrapper";

const Form = (props) => {
  const userInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();
  const [error, setError] = useState();

  // const [enteredUname, setEnteredUname] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  // const unameInputHandler = (event) => {
  //   setEnteredUname(event.target.value);
  // };
  // const ageInputHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const formHandler = (event) => {
    event.preventDefault();
    const userName = userInputRef.current.value;
    const userAge = ageInputRef.current.value;
    const usersCollege = collegeInputRef.current.value;
    // console.log( userName, userAge);
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Inavalid input 😠",
        messege: "Please neter a valid name and age (non-empty values).",
      });
      return;
    } else if (usersCollege.trim().length === 0) {
      setError({
        title: "Inavalid input 😠",
        messege: "Please neter a valid name and age (non-empty values).",
      });
      return;
    } else if (parseInt(userAge) < 1) {
      setError({
        title: "Inavalid age 😞",
        messege: "Please neter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(userName, userAge, usersCollege);
    // setEnteredAge("");
    // setEnteredUname("");
    userInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
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
            <label>Student Name</label>
            <input
              name="username"
              ref={userInputRef}
              type="text"
              // onChange={unameInputHandler}
              // value={enteredUname}
            ></input>
          </div>

          <div className="age">
            <label>Age (Years)</label>
            <input
              type="number"
              ref={ageInputRef}
              name="age"
              // onChange={ageInputHandler}
              // value={enteredAge}
            ></input>
          </div>

          <div className="age">
            <label>College Name</label>
            <input
              type="text"
              ref={collegeInputRef}
              name="Cname"
              // onChange={ageInputHandler}
              // value={enteredAge}
            ></input>
          </div>

          <div className="btn">
            <button type="submit">Add Student</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Form;
