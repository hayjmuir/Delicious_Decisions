export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Panda Express",
    price: 1
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Qdoba",
    price: 1.5
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Burger King",
    price: 2
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Veggie Pizza",
    section: "Jimmy Johns",
    price: 2
  },
  {
    img: "/img/burger.jpeg",
    name: "Burger",
    section: "NYPD Pizza",
    price: 3
  },
  { img: "/img/gyro.jpeg", name: "Gyro", section: "Salad 'n' Go", price: 4.5 },
  {
    img: "/img/sandwich.jpeg",
    name: "Shrimp PoBoy",
    section: "Pete's Fish and Chips",
    price: 6
  },
  {
    img: "/img/fries.jpeg",
    name: "Fries",
    section: "Filibertos",
    price: 1
  },
  {
    price: 1,
    name: "Soda",
    section: "Dunkin Donuts",
    choices: ["Coke", "Sprite", "Root Beer"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});

//  © created by react.school
