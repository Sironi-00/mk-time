let data = [
  {
    name: "Something",
    gender: "male",
    link: "https://images.pexels.com/photos/325845/pexels-photo-325845.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 1200,
    description: "idontknow lorempsoh ghgcnlgh sato aripo tenet opera rosta",
  },
  {
    name: "Oris",
    gender: "male",
    link: "https://images.unsplash.com/photo-1646889416154-973ea0e5e36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dpc3MlMjB3YXRjaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 559,
    description: "idontknow lorempsoh ghgcnlgh",
  },
  {
    name: "Mast & Harbour",
    gender: "male",
    link: "https://images.pexels.com/photos/10443775/pexels-photo-10443775.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 1098,
    description: "idontknow lorempsoh ghgcnlgh",
  },
  {
    name: "Something2",
    gender: "female",
    link: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 2700,
    description: "idontknow lorempsoh ghgcnlgh",
  },
  {
    name: "Michael Kors",
    gender: "female",
    link: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 1245,
    description: "idontknow lorempsoh ghgcnlgh",
  },
  {
    name: "Something3",
    gender: "female",
    link: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1",
    price: 2963,
    description: "idontknow lorempsoh ghgcnlgh",
  },
  {},
  {
    name: "Something",
    gender: "male",
    link: "https://images.pexels.com/photos/325845/pexels-photo-325845.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 1200,
    description: "idontknow lorempsoh ghgcnlgh sato aripo tenet opera rosta",
  },
  {
    name: "Oris",
    gender: "male",
    link: "https://images.unsplash.com/photo-1646889416154-973ea0e5e36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dpc3MlMjB3YXRjaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 559,
    description: "idontknow lorempsoh ghgcnlgh",
  },
  {
    name: "Mast & Harbour",
    gender: "male",
    link: "https://images.pexels.com/photos/10443775/pexels-photo-10443775.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 1098,
    description: "idontknow lorempsoh ghgcnlgh",
  },
  {
    name: "Something2",
    gender: "female",
    link: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 2700,
    description: "idontknow lorempsoh ghgcnlgh",
  },
  {
    name: "Michael Kors",
    gender: "female",
    link: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 1245,
    description: "idontknow lorempsoh ghgcnlgh",
  },
  {
    name: "Something3",
    gender: "female",
    link: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1",
    price: 2963,
    description: "idontknow lorempsoh ghgcnlgh",
  }
];

// The article which will display and contain shop items
let to_item = document.getElementById("item-body");

// get n set gender from a select elemnt
let selected_gender = "all";
let get_gender = document.getElementById("gender-opt");
let gender_filter = (to_gender)=>{
  selected_gender = to_gender;
  // clears all elements in the parent and re-renders items when gender changes
  to_item.innerHTML = "";
  data.map((el) => item_frame(el));
}
get_gender.addEventListener("change", ()=> gender_filter(get_gender.value))

// Display items from db
let item_frame = ({ name, gender, link, price, description }) => {
  // filters items by gender
  if (selected_gender != gender && selected_gender != "all") {
    return;
  }
  // creates and fill a div with preset item info
  let el = document.createElement("div");
  el.setAttribute("class", "item-box");
  el.innerHTML = `
    <img class="item-img" src="${link}" title="${name}" alt="${description}">
    <h3 class="item-name">${name}</h3>
    <summary>${description}</summary>
    <p class="item-price">Price: £${price}</p>
    <button id="${name}" class="item-buy">Buy Now</button>
    `;
  to_item.append(el);
  // gets shop item by id => name
  let buy = document.getElementById(`${name}`);
  // adds item to cart
  buy.addEventListener("click", ()=> cart_purchase(name, price));
};
// Displays data from obj to html
data.map((el) => item_frame(el));

// Displays cart items
let cart_sum = 0
let cart_purchase = (item, price) => {
    let cart = document.getElementById("cart-item");
    //Display items in a cart 
    let cart_item = document.createElement("p");
    cart.setAttribute("class", "cart-item-name");
    cart_item.innerHTML = `${item} - £${price}`;
    cart.append(cart_item);
    
    // Total amount in cart
    cart_sum += price
    let counter = document.getElementById("cart-total");
    counter.setAttribute("cart-sum", cart_sum)
}

// clear cart
let cart_clear = document.getElementById("cart-clear");
cart_clear.addEventListener("click", ()=> {
  let cart = document.getElementById("cart-item");
  cart.innerHTML = "";
  // reset sum amount
  cart_sum = 0;
  let counter = document.getElementById("cart-total");
  counter.setAttribute("cart-sum", cart_sum)
})

// Cart Checkout
let checkout = document.getElementById("cart-checkout");
checkout.addEventListener("click", ()=> alert("Thank You for Shopping with us <3 "))
