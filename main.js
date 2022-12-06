// *! DISH prices /////////

const prices = {
  // **starters ///
  chick65: 120,
  chicktikka: 200,
  friedchick: 150,
  chickkebab: 100,
  pannertika: 75,
  chickwings: 110,

  // **non veg ///
  chick65bri: 250,
  chickbri: 200,
  eggbri: 150,
  muttbri: 300,
  bonebri: 250,

  // **most wanted ///
  hydrabri: 400,
  chettibri: 350,
  luckbri: 400,
  malbarbri: 450,
  thallesery: 500,

  // **veg briyani ///
  paneerbri: 200,
  mushbri: 200,
  soyabri: 150,
  vegbri: 150,
  hydradum: 300,

  // **Desserts ///
  gulab: 20,
  kulfi: 30,
  laddu: 15,
  rasagulla: 30,
  vannila: 20,
};

function toastNotification() {
  Toastify({
    text: "Added to Cart",
    duration: 1000,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      color: "#041c35",
      background: "#ea811d",
    },
  }).showToast();
}

//!inserting rupee font
const rupeeIcon = '<i class="fa fa-inr"></i>';

const allDishPrices = document.querySelectorAll(".dish-price");

allDishPrices.forEach((dish) => {
  dish.insertAdjacentHTML("afterbegin", `${rupeeIcon}`);
});

// *!Cart functionality ////////////////////////////////
let addBtns = document.querySelectorAll(".add");
let quantityFields = document.getElementsByClassName("num");

let mainWrapper = document.querySelector(".main-wrapper");

const cart = document.querySelector(".cart");
const emptyCart = document.querySelector(".empty-cart");
const modalAllItems = document.querySelector(".modal-all-items");

let orderList = []; //list in cart

//!add evenlistener for add button -- event bubbling
mainWrapper.addEventListener("click", function (e) {
  let dish = e.target.parentElement.parentElement.children[1].innerText;

  if (e.target.className == "add") {
    //if the added dish already present in the list then dont add
    if (orderList.includes(dish)) {
      alert("its already in cart");
    } else {
      toastNotification();
      orderList.push(dish);
      e.target.addEventListener("click", addToCart(e));
    }

    console.log(orderList);

    if (modalAllItems.children.length > 0) {
      emptyCart.style.display = "none";
    }
  }
});

let cartNum = 0;

//!adding item to the cart
function addToCart(event) {
  let incrementNum = ++cartNum;
  cart.innerHTML = incrementNum;

  let itemContainer = document.createElement("tr");
  itemContainer.classList.add("modal-each-item");

  let btn = event.target;
  let btnParent = btn.parentElement;

  let itemName = btnParent.parentElement.children[1].innerText;
  let itemPrice = parseInt(btnParent.children[0].innerText);

  itemContainer.innerHTML = `
  <span class = "item-name">${itemName}</span>
  <span class="item-price">${rupeeIcon}<span>
  ${itemPrice}</span></span>
  <span><input type = 'number' class = 'num' value = '1'></span>
  <span class="total-price">${rupeeIcon}<span>${itemPrice}</span></span>
  <span><button class="del-btn" type="button">Remove</button></span>`;

  modalAllItems.append(itemContainer);

  grandTotal();
}

//!change event listener on changing quantity fields -- event bubbling
modalAllItems.addEventListener("change", function (e) {
  if (e.target.className == "num") {
    console.log(e.target);
    e.target.addEventListener("change", totalCost(e));
  }
  if (modalAllItems.children.length == 0) {
    emptyCart.style.display = "block";
  }
});

//!click event listener on delete button --  event bubbling
modalAllItems.addEventListener("click", function (e) {
  let removedish = e.target.parentElement.parentElement.children[0].textContent; //the dish to be removed
  if (e.target.className == "del-btn") {
    e.target.addEventListener("click", removeItem(e));
    removeDish(orderList, removedish); //remove the dish from the orderlist
  }

  if (modalAllItems.children.length == 0) {
    emptyCart.style.display = "block";
  }
});

//!function used to remove the dish from the orderList array
function removeDish(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

//! This function helps to multiply the quantity and the price
function totalCost(event) {
  console.log(event);
  let quantity = event.target;

  quantity_parent = quantity.parentElement.parentElement;
  price_field = quantity_parent.getElementsByClassName("item-price")[0];
  total_field = quantity_parent.getElementsByClassName("total-price")[0];
  price_field_content = price_field.innerText;
  console.log(price_field_content);
  total_field.innerHTML =
    ` <i class="fa fa-inr"></i>` + quantity.value * price_field_content;
  grandTotal();
  if (isNaN(quantity.value) || quantity.value <= 0) {
    removeItem(event);
  }
}

//! This function helps to add up the total of the items
function grandTotal() {
  let total = 0;
  let grand_total = document.querySelector(".grand-total");
  console.log(grand_total);

  all_total_fields = document.getElementsByClassName("total-price");
  console.log(all_total_fields);
  for (let i = 0; i < all_total_fields.length; i++) {
    all_prices = Number(all_total_fields[i].innerText);
    total += all_prices;
  }
  grand_total.innerHTML = `<i class="fa fa-inr"></i>` + total;
  grand_total.style.fontWeight = "bold";
  console.log(total);
}

//!acts when delete in the cart pressed
function removeItem(event) {
  del_btn = event.target;
  console.log(del_btn);
  del_btn_parent = del_btn.parentElement.parentElement;
  console.log(del_btn_parent);
  del_btn_parent.remove();
  console.log(del_btn);
  grandTotal();
  let decrementNum = --cartNum;
  cart.innerHTML = decrementNum;
}
