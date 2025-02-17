import React, { useState } from "react";

type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      className={`
        w-40 h-12 text-secondary  font-bold rounded-lg 
        transition-all duration-200 
        bg-primary hover:border-2  hover:border-secondary
        ${isPressed ? "shadow-inner shadow-secondary" : "shadow-md"}
      `}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {label}
    </button>
  );
};

export default Button;
