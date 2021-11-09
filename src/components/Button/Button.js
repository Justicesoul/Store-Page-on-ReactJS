import "./Button.css";

const Button = ({ buttonName, shopFilter }) => {
  return (
    <button className="button" onClick={shopFilter}>
      {buttonName}
    </button>
  );
};

export default Button;
