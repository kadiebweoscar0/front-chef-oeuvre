import React from "react";

type ButtonProps = {
  className: string;
  textButton: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  className,
  textButton,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="submit"
      className={className}
    >
      {textButton}
    </button>
  );
};

export default Button;
