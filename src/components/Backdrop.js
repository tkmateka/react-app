import Model from "./Model";

function Backdrop(props) {
  return (
    <div className="backdrop" onClick={props.onCancel}>
      <Model onConfirm={props.onCancel} onCancel={props.onCancel} />
    </div>
  );
}

export default Backdrop;
