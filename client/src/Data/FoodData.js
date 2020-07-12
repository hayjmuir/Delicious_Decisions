export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}
export const foodChoice = [
  {choice: "Panda Express",},
  {choice: "Qdoba",},
  {choice: "Salad n Go",},
  {choice: "Burger King",},
  {choice: "Jimmy Johns",},
  {choice: "Petes Fish n Chips",},
  {choice: "NYPD Pizza",},
  {choice: "Filibertos",},
];
export const foodItems = [
  
  {
    name: "Panda Bowl", 
    img: "https://www.tasteofhome.com/wp-content/uploads/2018/11/PX_OrangeChicken_FriedRice_Bowl.jpg",
    section: "Panda Express",
    price: 7,
    choices: ["Orange Chicken", "Teryaki Chicken", "Sweet and Sour Chicken"]
    
  },
  {
    name: "Egg Rolls",
    img: "https://www.dinneratthezoo.com/wp-content/uploads/2018/01/homemade-egg-rolls-4-500x500.jpg",
    section: "Panda Express",
    price: 1
  },
  {
    name: "Rangoons",
    img: "https://www.seriouseats.com/recipes/images/20110416-crab-rangoon-pupu-tiki16.jpg",
    section: "Panda Express",
    price: 1
  },
  {
    name: "Drinks",
    img: "https://live.staticflickr.com/113/306277190_c1c69e880c_z.jpg",
    section: "Panda Express",
    price: 2
  },
  {
    name: "Burrito",
    img: "https://www.qdobawisconsin.com/sites/default/files/qdoba_burritos.jpg",
    section: "Qdoba",
    price: 9
  },
  {
    name: "Bowl",
    img: "https://vegnews.com/media/W1siZiIsIjE1NzQyL1ZlZ05ld3MuUURPQkFGYWppdGFWZWdhbkJvd2wuanBnIl0sWyJwIiwiY29udmVydCIsIi1jcm9wIDI0MDB4MTQxOSsxMTIrMiArcmVwYWdlIC1yZXNpemUgODAweDQ3M14iLHsiZm9ybWF0IjoianBnIn1dLFsicCIsIm9wdGltaXplIl1d/VegNews.QDOBAFajitaVeganBowl.jpg?sha=338c7aeb1fab1d16",
    section: "Qdoba",
    price: 8
  },
  {
    name: "Chips",
    img: "https://m.media-amazon.com/images/G/01/ember/restaurants/austin/QdobaMexicanGrill/QdobaMexicanGrill_Chips_wQueso._V530334236_.jpg",
    section: "Qdoba",
    price: 1
  },
  {
    name: "Drinks",
    img: "https://images.contentful.com/qkbff05k1bjx/23NoZEfAN6QqeoE0IgiqoS/dc8003448d56bf91fa249f66fc14e338/CatDrinks_3x.png",
    section: "Qdoba",
    price: 2
  },
  
  {
    name: "Whopper",
    img: "https://i.insider.com/5c0990b1d5000c07f77ba114?width=960&format=jpeg",
    section: "Burger King",
    price: 4
  },
  {
    name: "Chicken Sandwich",
    img: "https://i.insider.com/5c0990b1d5000c07f77ba114?width=960&format=jpeg",
    section: "Burger King",
    price: 3
  },
  {
    name: "Fries",
    img: "https://i.insider.com/5c0990b1d5000c07f77ba114?width=960&format=jpeg",
    section: "Burger King",
    price: 2
  },
  {
    name: "Drink",
    img: "https://i.insider.com/5c0990b1d5000c07f77ba114?width=960&format=jpeg",
    section: "Burger King",
    price: 1
  },
  {
    img: "https://www.washingtonian.com/wp-content/uploads/2012/04/2012-4-16-JimmyJohns-01.jpg",
    name: "Sub",
    section: "Jimmy Johns",
    price: 10
  },
  {
    img: "https://www.washingtonian.com/wp-content/uploads/2012/04/2012-4-16-JimmyJohns-01.jpg",
    name: "Sandwich",
    section: "Jimmy Johns",
    price: 10
  },
  {
    img: "https://www.washingtonian.com/wp-content/uploads/2012/04/2012-4-16-JimmyJohns-01.jpg",
    name: "Chips",
    section: "Jimmy Johns",
    price: 10
  },
  {
    img: "https://www.washingtonian.com/wp-content/uploads/2012/04/2012-4-16-JimmyJohns-01.jpg",
    name: "Drink",
    section: "Jimmy Johns",
    price: 10
  },
  {
    img: "https://www.aznypdpizza.com/wp-content/uploads/2013/05/16.jpg",
    name: "Large Pizza",
    section: "NYPD Pizza",
    price: 23
  },
  {
    img: "https://www.aznypdpizza.com/wp-content/uploads/2013/05/16.jpg",
    name: "Medium Pizza",
    section: "NYPD Pizza",
    price: 16
  },
  {
    img: "https://www.aznypdpizza.com/wp-content/uploads/2013/05/16.jpg",
    name: "Bread Sticks",
    section: "NYPD Pizza",
    price: 5
  },
  {
    img: "https://www.aznypdpizza.com/wp-content/uploads/2013/05/16.jpg",
    name: "Personal Pizza",
    section: "NYPD Pizza",
    price: 7
  },
  { img: "https://images1.phoenixnewtimes.com/imager/u/original/11476970/salad_and_go_-_buffalo_chicken_salad.jpg", 
  name: "Veggie Salad", 
  section: "Salad 'n' Go", 
  price: 4.5 
  },
  { img: "https://images1.phoenixnewtimes.com/imager/u/original/11476970/salad_and_go_-_buffalo_chicken_salad.jpg", 
  name: "Protein Salad", 
  section: "Salad 'n' Go", 
  price: 4.5 
  },
  { img: "https://images1.phoenixnewtimes.com/imager/u/original/11476970/salad_and_go_-_buffalo_chicken_salad.jpg", 
  name: "Wrap", 
  section: "Salad 'n' Go", 
  price: 4.5 
  },
  { img: "https://images1.phoenixnewtimes.com/imager/u/original/11476970/salad_and_go_-_buffalo_chicken_salad.jpg", 
  name: "Drink", 
  section: "Salad 'n' Go", 
  price: 2
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlMa4ZrmlrfrtpddrnDXIsMb-fmz-peTxfkg&usqp=CAU",
    name: "3 piece Fish n Chips",
    section: "Pete's Fish and Chips",
    price: 3.75
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlMa4ZrmlrfrtpddrnDXIsMb-fmz-peTxfkg&usqp=CAU",
    name: "5 piece Fish n Chips",
    section: "Pete's Fish and Chips",
    price: 5.75
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlMa4ZrmlrfrtpddrnDXIsMb-fmz-peTxfkg&usqp=CAU",
    name: "Monster Burger n Chips",
    section: "Pete's Fish and Chips",
    price: 6.75
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlMa4ZrmlrfrtpddrnDXIsMb-fmz-peTxfkg&usqp=CAU",
    name: "Drinks",
    section: "Pete's Fish and Chips",
    price: .75
  },
  {
    img: "https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_80,c_fill,w_200,h_150/j8yueu590okkufajyreh",
    name: "Burrito",
    section: "Filibertos",
    price: 9
  },
  {
    img: "https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_80,c_fill,w_200,h_150/j8yueu590okkufajyreh",
    name: "Tacos",
    section: "Filibertos",
    price: 9
  },{
    img: "https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_80,c_fill,w_200,h_150/j8yueu590okkufajyreh",
    name: "Rice or Beans",
    section: "Filibertos",
    price: 9
  },{
    img: "https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_80,c_fill,w_200,h_150/j8yueu590okkufajyreh",
    name: "Drinks",
    section: "Filibertos",
    price: 9
  },
  {
    img:"https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/wingstop-adds-whole-wings-fall-menu.jpg?itok=0N0Y99zj",
    name: "6 Piece Wings",
    section: "WingStop",
    price: 8
  },
  {
    img:"https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/wingstop-adds-whole-wings-fall-menu.jpg?itok=0N0Y99zj",
    name: "12 Piece Wings",
    section: "WingStop",
    price: 15
  },
  {
    img:"https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/wingstop-adds-whole-wings-fall-menu.jpg?itok=0N0Y99zj",
    name: "Party Wings",
    section: "WingStop",
    price: 25
  },
  {
    img:"https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/wingstop-adds-whole-wings-fall-menu.jpg?itok=0N0Y99zj",
    name: "Stupid Fries",
    section: "WingStop",
    price: 5
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});



