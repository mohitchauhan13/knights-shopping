import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  secondary: "secondary",
};

const Button = ({ children, buttonType, className, ...otherProps }) => {
  return (
    <button
      className={`button ${BUTTON_TYPE_CLASSES[buttonType]} ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
