const productsData = [
    { id: 1, name: "Pen", price: 10, image: "./favicons/pen.ico" },
    { id: 2, name: "Pencil", price: 5, image: "./favicons/pencil.ico" },
    { id: 3, name: "Notebook", price: 25, image: "./favicons/notebook.ico" },
    { id: 3, name: "Ruler", price: 15, image: "./favicons/ruler.ico" },
];
  
// Initialize cart items from cookies or an empty array
let cartItems = JSON.parse(getCookie("cart")) || [];

// Function to display products
function displayProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";
    productsData.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <center><img src="${product.image}"<center><br>
            <h3>${product.name}</h3>
            <p>Rs. ${product.price.toFixed(2)}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}
  
// Function to add item to cart
function addToCart(productId) {
    const productToAdd = productsData.find(product => product.id === productId);
    if (productToAdd) {
        const existingItem = cartItems.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++; // Increase quantity if item already exists
        } else {
            cartItems.push({ ...productToAdd, quantity: 1 }); // Add new item with quantity 1
        }
        updateCart();
    }
}
  
// Function to update cart display
function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";
    let totalPrice = 0;
  
    cartItems.forEach(item => {
        const li = document.createElement("div");
        li.innerHTML = `<p class="items">${item.name} - Quantity: ${item.quantity} - Rs. ${(item.price * item.quantity).toFixed(2)}</p>`;
        cartItemsList.appendChild(li);
        totalPrice += item.price * item.quantity;
    });
  
    document.getElementById("cart-total").textContent = totalPrice.toFixed(2);
  
    // Update cart in cookies
    setCookie("cart", JSON.stringify(cartItems));
}
  
// Function to clear cart and cookies
function clearCart() {
    const confirmClear = confirm("Are you sure you want to clear the cart?");
    if (confirmClear) {
        cartItems = []; // Clear cart items
        updateCart(); // Update cart display
    } else {
        // provide feedback to the user
       alert("Cart clear cancelled.");
    }
}
  
// Utility functions for managing cookies
function setCookie(name, value, days = 7) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}
  
function getCookie(name) {
    const cookie = document.cookie.split("; ").find(cookie => cookie.startsWith(name + "="));
    return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
}

// Initialize the product listing and cart on page load
window.onload = () => {
    displayProducts();
    updateCart();
};