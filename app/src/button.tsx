import React from "react";

type ButtonProps = {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => (
  <button className="btn" type="button">
    {title}
  </button>
);

export default Button;