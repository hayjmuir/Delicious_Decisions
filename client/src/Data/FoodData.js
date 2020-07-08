export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const foodItems = [
  {
    name: "Meals",
    img: "https://developinglafayette.com/wp-content/uploads/2020/04/img_7063.jpg",
    section: "Panda Express",
    price: 1
  },
  {
    name: "Meals",
    img: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fguiltyeats.com%2Ffiles%2Fimage-exchange%2F2016%2F04%2Fie_45508.jpeg",
    section: "Qdoba",
    price: 1
  },
  {
    name: "Meals",
    img: "https://i.insider.com/5c0990b1d5000c07f77ba114?width=960&format=jpeg",
    section: "Burger King",
    price: 1
  },
  {
    img: "https://www.washingtonian.com/wp-content/uploads/2012/04/2012-4-16-JimmyJohns-01.jpg",
    name: "Meals",
    section: "Jimmy Johns",
    price: 1
  },
  {
    img: "https://www.aznypdpizza.com/wp-content/uploads/2013/05/16.jpg",
    name: "Meals",
    section: "NYPD Pizza",
    price: 10
  },
  { img: "https://images1.phoenixnewtimes.com/imager/u/original/11476970/salad_and_go_-_buffalo_chicken_salad.jpg", 
  name: "Meals", 
  section: "Salad 'n' Go", 
  price: 4.5 
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlMa4ZrmlrfrtpddrnDXIsMb-fmz-peTxfkg&usqp=CAU",
    name: "Meals",
    section: "Pete's Fish and Chips",
    price: 1
  },
  {
    img: "https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_80,c_fill,w_200,h_150/j8yueu590okkufajyreh",
    name: "Meals",
    section: "Filibertos",
    price: 1
  },
  {
    img:"https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/wingstop-adds-whole-wings-fall-menu.jpg?itok=0N0Y99zj",
    name: "Meals",
    section: "WingStop",
    price: 1,
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});



