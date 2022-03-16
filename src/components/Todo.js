import { useState } from "react";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [isModelOpen, setIsModelOpen] = useState(false);

  function deleteHandler() {
    setIsModelOpen(true);
  }

  function closeModelHandler() {
    setIsModelOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="actionButtons rightAlign">
        <button className="btn-filled" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModelOpen ? <Backdrop onCancel={closeModelHandler} /> : null}
    </div>
  );
}

export default Todo;
