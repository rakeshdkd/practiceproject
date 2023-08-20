import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="main-div" onClick={props.onConfirm} />;
};

const Overlay = (props) => {
  return (
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
  );
};
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          messege={props.messege}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
