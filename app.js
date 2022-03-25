'use strict';

const cartItemsEl = document.querySelector(".cart-items-row");
const removeCartItemBtn = document.querySelectorAll(".remove-btn");
const addToCartBtn = document.querySelectorAll(".shop-item-button");

for(let i = 0; i < addToCartBtn.length; i++) {
    let button = addToCartBtn[i];
    button.addEventListener("click", addToCartClicked)
}

function addToCartClicked(event) {
    // console.log(event.target);
    let button = event.target;
    const shopItem = button.parentElement.parentElement;
    const title = shopItem.querySelector(".shop-item-title").innerText;
    const price = shopItem.querySelector(".shop-item-price").innerText;
    const imageSrc = shopItem.querySelector(".shop-item-img").src;

    addItemToCart(title, price, imageSrc);
}

//add item to cart
function addItemToCart(title, price, imageSrc) {
    cartItemsEl.innerHTML = "";
    cartItemsEl.innerHTML += `
       <div class="cart-item">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
          <span class="cart-item-title">${price}</span>
          <div class="cart-quantity">
             <input class="cart-quantity-input" type="number" value="1">
             <button class="remove-btn" type="button" onclick="removeCartItem()">REMOVE</button>
          </duv>
       </div>
    `
}

//remove item from cart
for(let i = 0; i < removeCartItemBtn.length; i++) {
    let button = removeCartItemBtn[i]
    button.addEventListener("click", removeCartItem)
}

//remove item from cart
function removeCartItem(event) {
    // console.log(event.target);
    let removeBtn = event.target;
    removeBtn.parentElement.parentElement.remove();
}