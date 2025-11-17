import React from "react";

const Button = ({ type }) => {
  let title;
  if (type == "xem") {
    title = "Xem chi tiết";
  } else if (type == "mua") {
    title = "Mua ngay";
  }
  return (
    <a
      href="#"
      className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition"
    >
      {title}
    </a>
  );
};

export default Button;
