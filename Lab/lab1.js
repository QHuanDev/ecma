// Bài tập 1: Sử dụng let, const và Template Literals
// Yêu cầu:
// Viết hàm tính chỉ số BMI (Body Mass Index) với công thức:
// 👉 BMI = weight / (height * height)

// function calculateBMI(weight, height) {
//    TODO: Sử dụng const cho các hằng số
//    TODO: Sử dụng template literals để tạo thông báo
//    TODO: Phân loại BMI theo:
//    - Dưới 18.5: Thiếu cân
//    - 18.5 - 24.9: Bình thường
//    - 25 - 29.9: Thừa cân
//    - Trên 30: Béo phì
// }

function calculateBMI(weight, height) {
  const BMI = weight / (height * height);
  if (BMI < 18.5) {
    return `Thiếu cân: BMI của bạn là ${BMI}`;
  } else if (BMI > 18.5 && BMI < 24.9) {
    return `Bình thường: BMI của bạn là ${BMI}`;
  } else if (BMI > 25 && BMI < 29.9) {
    return `Thừa cân: BMI của bạn là ${BMI}`;
  } else if (BMI > 30) {
    return `Béo phì: BMI của bạn là ${BMI}`;
  }
}

// // Ví dụ sử dụng
console.log(calculateBMI(57, 1.75)); // "BMI: 22.86 - Phân loại: Bình thường"

// Bài tập 2: Enhanced Object Literals
// Yêu cầu:
// Tạo đối tượng quản lý sách sử dụng enhanced object literals.

// function createBook(title, author, year, price) {
//    TODO: Sử dụng shorthand properties
//    TODO: Thêm method getBookInfo() trả về thông tin sách
//    TODO: Thêm method tính giá sau giảm giá (discount %)
//    TODO: Sử dụng computed property names
// }
function createBook(title, author, year, price) {
  const book = {
    title,
    author,
    year,
    price,
    getBookInfo() {
      return `Sách: ${this.title} Tác giả: ${this.author} Năm: ${this.year} Giá: ${this.price} vnd`;
    },
    calculateDiscount(discount) {
      return `Giảm ${discount} %`;
    },
  };
  return book;
}

// // Ví dụ sử dụng
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10)); // Giảm 10%
