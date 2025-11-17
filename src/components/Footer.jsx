import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Về Chúng Tôi</h3>
            <p className="text-gray-400">
              Công ty Quang Huan - Cung cấp giải pháp công nghệ hàng đầu. Chúng
              tôi cam kết mang đến trải nghiệm tốt nhất cho khách hàng.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Sản Phẩm
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liên Hệ</h3>
            <p className="text-gray-400">Địa chỉ: Hà Nội</p>
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:contact@xyz.com"
                className="text-gray-400 hover:text-blue-500"
              >
                contact@xyz.com
              </a>
            </p>
            <p className="text-gray-400">
              Điện thoại:{" "}
              <a
                href="tel:+8436873303"
                className="text-gray-400 hover:text-blue-500"
              >
                +84 23 123 4567
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p> Công ty Quang Huan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
