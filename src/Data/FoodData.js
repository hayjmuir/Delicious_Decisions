export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const foodItems = [
  {
    name: "Meals",
    img: "/img/pizza.png",
    section: "Panda Express",
    price: 1
  },
  {
    name: "Meals",
    img: "/img/pizza2.jpeg",
    section: "Qdoba",
    price: 1
  },
  {
    name: "Meals",
    img: "/img/chicken-pizza.jpeg",
    section: "Burger King",
    price: 1
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Meals",
    section: "Jimmy Johns",
    price: 1
  },
  {
    img: "/img/burger.jpeg",
    name: "Meals",
    section: "NYPD Pizza",
    price: 1
  },
  { img: "/img/gyro.jpeg", name: "Meals", section: "Salad 'n' Go", price: 4.5 },
  {
    img: "/img/sandwich.jpeg",
    name: "Meals",
    section: "Pete's Fish and Chips",
    price: 1
  },
  {
    img: "/img/fries.jpeg",
    name: "Meals",
    section: "Filibertos",
    price: 1
  },
  {
    price: 1,
    name: "Drinks/Coffee",
    section: "Dunkin Donuts",
    choices: ["Coffee", "Iced Coffee", "Bottled Drink"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});



