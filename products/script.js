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
    name: "Something",
    gender: "male",
    link: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 2700,
    description: "idontknow lorempsoh ghgcnlgh",
  },
  {
    name: "Michael Kors",
    gender: "male",
    link: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 1245,
    description: "idontknow lorempsoh ghgcnlgh",
  },
  {
    name: "Something",
    gender: "male",
    link: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1",
    price: 2963,
    description: "idontknow lorempsoh ghgcnlgh",
  },
];

// The article which will display and contain shop items
let to_item = document.getElementById("item-body");
// get n set gender from a select elemnt
let selected_gender = "both";
let item_frame = ({ name, gender, link, price, description }) => {
  // Display items based on gender
  if (selected_gender != gender && selected_gender != "both") {
    to_item.innerHTML = "No items";
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
    <button class="item-buy">Buy</button>
    `;
  to_item.append(el);
};

data.map((el) => item_frame(el));
