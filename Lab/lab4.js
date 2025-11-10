function getFirstLast(array) {
  return [array[0], array[array.length - 1]];
}

console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]

function swapElements(arr) {
  let newArr = [...arr];
  [newArr[1], newArr[3]] = [newArr[3], newArr[1]];
  return newArr;
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]

const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  const {
    personalInfo: {
      name,
      contact: { email },
    },
  } = user;
  return { name, email };
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }

function createProduct({ name, price, category = "general", inStock = true }) {
  const product = {
    name,
    price,
    category,
    inStock,
  };
  return { ...product };
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(() => console.log("2 seconds passed"));

function fetchMultipleData(urls) {
  return Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
}

fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
  console.log(users)
);
