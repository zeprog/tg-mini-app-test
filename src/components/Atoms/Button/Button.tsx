import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  variant?: "gray" | "blue-big" | "blue-small";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = "gray", onClick }) => {
  const buttonClass = `${styles[variant]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
