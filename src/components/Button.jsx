import React from "react";

const Button = ({ type }) => {
  return (
    <a
      href="#"
      className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition"
    >
      {type == "xem" ? "Xem Chi Tiết" : "Mua Ngay"}
    </a>
  );
};

export default Button;
