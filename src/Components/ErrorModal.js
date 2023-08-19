import React from "react";

import "./ErrorModal.css";
const ErrorModal = (props) => {
  return (
    <div className="main-div" onClick={props.onConfirm}>
      <div className="modal_div">
        <header>
          <h2>{props.title}</h2>
        </header>
        <hr />
        <div>
          <p>{props.messege}</p>
        </div>
        <hr />

        <footer>
          <button onClick={props.onConfirm}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
