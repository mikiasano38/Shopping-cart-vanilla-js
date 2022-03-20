const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-item");


//get products from products.js
class Products {
    static getproducts() {
        products.forEach((product) => {
            productsEl.innerHTML += `
                <div class="container">
                    <div class="item">
                        <h2>${product.name}</h2>
                        <h3><small>$</small>${product.price}</h3>
                        <button class="btn" onclick="UI.addToCart(${product.id})">Add Cart</button>
                    </div>
                </div>
            `
        })
    }
}

//create cart
let cart = JSON.parse(localStorage.getItem("CART")) || [];

//class UI: add item to cart, remove item from cart, update cart...
class UI {
    static addToCart(id) {
        if(cart.some((item) => item.id === id)) {
            alert("This item is already in your cart");
        }else {
            const item = products.find((item) => item.id === id);
            cart.push({
                ...item,
                count: 1
            });
        }
        console.log(cart);
        //save to local
        localStorage.setItem("CART", JSON.stringify(cart))
    }

    static showMyCart() {
        cartItemsEl.innerHTML = "";
        cart.forEach((item) => {
            cartItemsEl.innerHTML += `
                <div class="cart-container">
                    <div class="cart-info">
                        <h3>${item.name}</h3>
                        <h4>$${item.price}</h4>
                        <button class="btn minus" onclick="changeCounts('minus', ${item.id})">-</button>
                        <div class="number">${item.count}</div>
                        <button class="btn plus" onclick="changeCounts('plus', ${item.id})">+</button>
                        <button class="delete" onclick=""UI.removeItem(${item.id})>Delete</button>
                    </div>
                </div>
            `
        })
    }

    // !!!!!not work!!!!!!
    static removeItemFromCart(id) {
        cart = cart.filter((item) => item.id !== id);
    }

    // !!!!! not same with my image!!!!!
    static updateCart() {
        cartItemsEl.innerHTML = "";
        cart.forEach((item) => {
            cartItemsEl.innerHTML += `
                <div class="cart-container">
                    <div class="cart-info">
                       <h3>${item.name}</h3>
                       <h4>$${item.price}</h4>
                       <button class="btn minus" onclick="changeCounts('minus', ${item.id})">-</button>
                       <div class="number">${item.count}</div>
                       <button class="btn plus" onclick="changeCounts('plus', ${item.id})">+</button>
                       <button class="delete" onclick=""UI.removeItem(${item.id})>Delete</button>
                    </div>
                </div>
            `
        })
    }

}

//Event
document.addEventListener("DOMContentLoaded", Products.getproducts);
document.querySelector(".cartBtn").addEventListener("click", () => {
    UI.showMyCart();
})

//change counts in cart
function changeCounts(action, id) {
    cart = cart.map((item) => {
        let count = item.count;

        if(item.id === id) {
            if(action === "minus" && count > 1) {
                count--
            }else if(action === "plus" && count < item.instock) {
                count++
            }
        }
        return {
            ...item,
            count
        };
    })

    UI.updateCart();
}

document.querySelector(".cart-item").style.display = "none";
function clickBtn() {
    const cartItems = document.querySelector("cart-item");

    if(cartItems.style.display = "block") {
        cartItems.style.display = "none";
    }else{
        cartItems.style.display = "block";
    }
}

