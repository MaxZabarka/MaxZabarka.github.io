import "./Hamburger.css";

const Hamburger = (props) => {
  return (
    <div className={props.open ? "open" : ""} onClick={props.click} id="nav-icon4">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
