// Sửa đoạn code sau để hoạt động đúng
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2

// Bai 2 ================
// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
const student = {
  name: "ThuyTien",
  age: 20,
};

// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
student.grade = "A";
// 2. Thay đổi tuổi thành 21
student.age = 21;
// 3. In ra toàn bộ thông tin student
console.log(student);

// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `Xin chào ${user.firstName + user.lastName}
Bạn vừa mua ${user.product} với giá ${user.price}vnđ
ngày: ${user.orderDate}`; // Viết template ở đây

console.log(emailTemplate);

// Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `Sản phẩm ${product.name}
giá gốc: ${product.price}
giảm: ${product.discount}%
giá mới: ${finalPrice}
chỉ còn: ${product.inStock} sản phẩm
`; // Viết template ở đây

console.log(productCard);
