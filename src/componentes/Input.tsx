import React from "react";

type InputProps = {
  placeholder: string;
  status?: "default" | "success" | "error" | "warning";
};

const Input: React.FC<InputProps> = ({ placeholder, status = "default" }) => {
  const statusClasses = {
    default: "border-gray-50 text-gray-50",
    success: "border-success text-success",
    error: "border-danger text-danger",
    warning: "border-warning text-warning",
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-60 h-10 px-4 rounded-lg border-2 outline-none mx-3 transition-all duration-200 ${statusClasses[status]}`}
    />
  );
};

export default Input;
