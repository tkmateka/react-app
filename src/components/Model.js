function Model(props) {
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal card" onClick={(e) => preventDefaults(e)}>
      <p>Are you sure</p>
      <div className="actionButtons centerAlign">
        <button className="btn-outlined" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="btn-filled" onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Model;
