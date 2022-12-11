let data = {
    name: "Something",
    link: "https://images.pexels.com/photos/13739233/pexels-photo-13739233.jpeg?auto=compress&cs=tinysrgb",
    price: 0,
    description: "idontknow"
}

let to_item = document.getElementById("item-body")
let item_frame = ({name, link, price, description}) => {
    let el = document.createElement("div");
    el.setAttribute("class","item-box")
    el.innerHTML = `
    <img id="item-img" src="${link}" title="${name}\n$ ${price}" alt="${description}">
    <h3 id="item-name">${name}</h3>
    <p id="item-price">Price: $${price}</p>
    <Summary id="item-description">${description}</Summary>
    `
    to_item.append(el)    
}
item_frame(data)
item_frame(data)
item_frame(data)

item_frame(data)
item_frame(data)
item_frame(data)
