import React from "react";
import Button from "./Button";

const Card = ({ data }) => {
  return (
    <div
      key={data.id}
      className="bg-white rounded-xl shadow-md  hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={data.image}
        alt={data.alt}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {data.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{data.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-emerald-600">
            {data.price}
          </span>
          <Button>Mua ngay</Button>
          <Button>Xem chi tiết</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
