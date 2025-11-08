// Function 1
multiply = (a, b) => {
  return a * b;
};
// Function 2
isPositive = (number) => {
  return number >= 0;
};

// Function 3
getRandomNumber = () => {
  return Math.random();
};

// Function 4
// document.addEventListener("click", () => {
//   console.log("Clicked!");
// });
// ===================================================

createUser = (name = "Anonymous", age = 18, isAdmin = false) => {
  return {
    name: name,
    age: age,
    isAdmin: isAdmin,
  };
};
console.log(createUser());

// =========================
// Hàm mergeArrays nhận nhiều mảng và trả về mảng hợp nhất
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
// Hàm sumAll tính tổng tất cả tham số truyền vào
sumAll = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b);
// Hàm createProduct nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định
createProduct = ({
  name = "Sản phẩm chưa đặt tên",
  price = 0,
  category = "Chưa phân loại",
}) => {
  return {
    name,
    price,
    category,
  };
};
// ==================================
// Bài tập 4: Ứng dụng thực tế
// Tạo hàm shoppingCart với:

// Tham số đầu tiên là tên khách hàng
// Các tham số tiếp theo là các sản phẩm
// Sử dụng rest parameters để thu thập sản phẩm
// Trả về object chứa thông tin đơn hàng

const khachHang = "Huấn Quang";

const sanPham1 = { name: "Táo", price: 20000, quantity: 3 };
const sanPham2 = { name: "Cam", price: 15000, quantity: 5 };
const sanPham3 = { name: "Chuối", price: 10000, quantity: 2 };

shoppingCart = (khachHang, sanPham1, sanPham2, sanPham3) => {
  return {
    name: [khachHang],
    product: [...sanPham1, ...sanPham2, ...sanPham3],
  };
};
