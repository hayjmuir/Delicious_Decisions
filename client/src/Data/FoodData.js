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
    price: 2,
    choices: ["Sprite", "Coke", "Tea", "Lemonade"]
  },
  {
    name: "Burrito",
    img: "https://www.qdobawisconsin.com/sites/default/files/qdoba_burritos.jpg",
    section: "Qdoba",
    price: 9,
    choices: ["Chicken Queso", "Fajita Veggie", "Steak"]
  },
  {
    name: "Bowl",
    img: "https://vegnews.com/media/W1siZiIsIjE1NzQyL1ZlZ05ld3MuUURPQkFGYWppdGFWZWdhbkJvd2wuanBnIl0sWyJwIiwiY29udmVydCIsIi1jcm9wIDI0MDB4MTQxOSsxMTIrMiArcmVwYWdlIC1yZXNpemUgODAweDQ3M14iLHsiZm9ybWF0IjoianBnIn1dLFsicCIsIm9wdGltaXplIl1d/VegNews.QDOBAFajitaVeganBowl.jpg?sha=338c7aeb1fab1d16",
    section: "Qdoba",
    price: 8,
    choices: ["Chicken Protein", "Impossible Fajita", "Smoked Brisket Keto"]
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
    price: 2, 
    choices: ["Sprite", "Coke", "Tea", "Lemonade"]
  },
  
  {
    name: "Whopper",
    img: "https://www.thesun.co.uk/wp-content/uploads/2019/12/DD-COMP-WHOPPER.jpg",
    section: "Burger King",
    price: 4,
  },
  {
    name: "Chicken Sandwich",
    img: "https://s.hdnux.com/photos/60/25/66/12672417/3/920x920.jpg",
    section: "Burger King",
    price: 3
  },
  {
    name: "Fries",
    img: "https://fastfoodnutrition.org/item-photos/672x524/1470_s.jpg",
    section: "Burger King",
    price: 2
  },
  {
    name: "Drinks",
    img: "https://i.ya-webdesign.com/images/burger-king-drink-png.png",
    section: "Burger King",
    price: 1,
    choices: ["Sprite", "Coke", "Tea", "Lemonade"]
  },
  {
    img: "https://www.jimmyjohns.com/images/menu/Items/section_guargantuan.jpg",
    name: "Sub",
    section: "Jimmy Johns",
    price: 10,
    choices: ["Veggie", "Big John", "Totally Tuna", "The Pepe"]
  },
  {
    img: "https://i.pinimg.com/originals/f8/41/73/f84173d207ca02aa944ca9f63bdc7261.jpg",
    name: "Sides",
    section: "Jimmy Johns",
    price: 10,
    choices: ["Oatmeal Raisin Cookie", "Triple Chocolate Chunk Brownie", "Kosher Dill Pickle"]
  },
  
  {
    img: "https://www.chipsandcrisps.com/uploads/1/4/8/3/14831570/published/download_3.jpg?1590688554",
    name: "Chips",
    section: "Jimmy Johns",
    price: 10
  },
  {
    img: "https://i.pinimg.com/236x/32/fe/2f/32fe2f588aef7c955dc2475d76290db7--jimmy-johns-party-cups.jpg",
    name: "Drink",
    section: "Jimmy Johns",
    price: 10,
    choices: ["Sprite", "Coke", "Tea", "Lemonade"]
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
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0b/ae/59/ae/garlic-knots.jpg",
    name: "Garlic Knots",
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
  { img: "https://wellvegan.com/wp-content/uploads/2018/08/greek-salad-wrap-02@2x.jpg", 
  name: "Wrap", 
  section: "Salad 'n' Go", 
  price: 4.5 
  },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsBQVI-BHVzUD6QM7eN-zDA3g9RQBuUrZ7GA&usqp=CAU", 
  name: "Drinks", 
  section: "Salad 'n' Go", 
  price: 2,
  choices: ["iced coffee", "Tea", "Lemonade"]
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
    name: "Monster Burger",
    section: "Pete's Fish and Chips",
    price: 6.75
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlMa4ZrmlrfrtpddrnDXIsMb-fmz-peTxfkg&usqp=CAU",
    name: "Drinks",
    section: "Pete's Fish and Chips",
    price: .75,
    choices: ["Sprite", "Coke", "Tea", "Lemonade"]
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
    name: "Rice and Beans",
    section: "Filibertos",
    price: 9
  },{
    img: "https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_80,c_fill,w_200,h_150/j8yueu590okkufajyreh",
    name: "Drinks",
    section: "Filibertos",
    price: 9,
    choices: ["Sprite", "Coke", "Horchata", "Jamica"]
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
    name: "Fries",
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



