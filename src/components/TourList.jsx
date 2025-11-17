import React from "react";
import Card from "./Card";

const TourList = () => {
  const tours = [
    {
      id: 1,
      title: "Tour Đà Lạt 3N2Đ",
      image:
        "https://cdn.nhandan.vn/images/6e407d305cea747ceadbf81d9ed5d5614c5275b6497477e68beb293bf8c03a5fa0c142aa2a9708a43dc1b6d808bd3be2f30df6e68b0f816001601be460586338c2381094306107c33e4c998a37d06158/1-da-lat-mong-manh-man-suong-4611-737.jpg",
      description:
        "Khám phá thành phố ngàn hoa, hồ Xuân Hương, thung lũng Tình Yêu...",
      price: "2.990.000đ",
      alt: "Tour Đà Lạt",
    },
    {
      id: 2,
      title: "Tour Phú Quốc 4N3Đ",
      image:
        "https://www.luavietours.com/wp/wp-content/uploads/2024/11/bai-sao-phu-quoc-750x460.jpg",
      description: "Tắm biển Bãi Sao, cáp treo Hòn Thơm, khám phá đảo ngọc...",
      price: "6.500.000đ",
      alt: "Tour Phú Quốc",
    },
    {
      id: 3,
      title: "Tour Hà Nội - Hạ Long",
      image:
        "https://viettourist.com//resources/images/MienBac/980dongbacnew/vinh-baitulong-5.jpg",
      description: "Vịnh Hạ Long, chùa Bái Đính, Tràng An, phố cổ Hà Nội...",
      price: "4.800.000đ",
      alt: "Tour Hà Nội",
    },
    {
      id: 4,
      title: "Tour Đà Nẵng - Hội An",
      image:
        "https://hoangphuan.com/wp-content/uploads/2024/08/tour-hoi-an-1-ngay-tu-da-nang-hap-dan-nhat-2024-1.jpg",
      description: "Bà Nà Hills, phố cổ Hội An, cầu Rồng, biển Mỹ Khê...",
      price: "3.750.000đ",
      alt: "Tour Đà Nẵng",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Khám Phá Các Tour Du Lịch Hấp Dẫn
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {tours.map((tour) => (
          <Card data={tour} />
        ))}
      </div>
    </div>
  );
};

export default TourList;
