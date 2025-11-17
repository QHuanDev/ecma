import React from "react";

const Button = ({ children }) => {
  return (
    <a
      href="#"
      className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition"
    >
      {children}
    </a>
  );
};

export default Button;
