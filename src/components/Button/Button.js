import "./Button.css";

const Button = ({ buttonName }) => {
  const clickHandler = () => {
    alert(`Your choice is ${buttonName}`);
  };
  return (
    <button className="button" onClick={clickHandler}>
      {buttonName}
    </button>
  );
};

export default Button;
