'use strict';

//Elements
const openMyCartButton = document.getElementById("open-myCart");
const cartItems = document.querySelector(".cart-container");
const closeMyCartButton = document.getElementById("close-myCart");
const removeCartItemButtons = document.querySelectorAll(".remove-btn");
const addToCartButtons = document.querySelectorAll(".shop-item-button");
const cartQuantity = document.querySelectorAll(".cart-quantity-input");

//open my cart
openMyCartButton.addEventListener("click", () => {
    cartItems.style.display = "block";
})

//close my cart
closeMyCartButton.addEventListener("click", () => {
    cartItems.style.display = "none";
})

//remove button
for(let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
}

//function: remove item from cart
function removeCartItem(event) {
    const removeButton = event.target;
    removeButton.parentElement.parentElement.remove();
}

//add to cart buttons
for(let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked)
}

//function: add item to cart
function addToCartClicked(event) {
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.getElementsByClassName("shop-item-title")[0].innerHTML;
    let price = shopItem.getElementsByClassName("shop-item-price")[0].innerHTML;
    let imageSrc = shopItem.getElementsByClassName("shop-item-img")[0].src;

    addItemToCart(title, price, imageSrc);
}

//function: add item to cart
function addItemToCart(title, price, imageSrc) {
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartDiv = document.createElement("div");
    cartDiv.classList.add("insert-cart");

    cartDiv.innerHTML += `
    <div class="cart-item">
    <img src="${imageSrc}" class="cart-item-image" width="100" height="100">
    <span class="cart-item-title">${title}</spna>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="remove-btn" type="button" onclick="removeCartItem(event)">REMOVE</button>
</div>
    `

    cartItemsContainer.appendChild(cartDiv);

}

//chnage number of cart quantity
for(let i = 0; i < cartQuantity.length; i++) {
    cartQuantity[i].addEventListener("click", (event) => {
        let input = event.target;
        if(isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
    })

    // totalCart();
}

//function: total cart items and price
