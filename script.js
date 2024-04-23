const productsData = [
    { id: 1, name: "Pen", price: 10, image: "./favicons/pen.ico" },
    { id: 2, name: "Pencil", price: 5, image: "./favicons/pencil.ico" },
    { id: 3, name: "Notebook", price: 25, image: "./favicons/notebook.ico" },
    { id: 4, name: "Ruler", price: 15, image: "./favicons/ruler.ico" },
    { id: 5, name: "Crayon (Set of 15)", price: 45, image: "./favicons/crayon.ico" },
    { id: 6, name: "Geometry Box", price: 110, image: "./favicons/geometry.ico" },
    { id: 7, name: "Highlighter", price: 30, image: "./favicons/highlighter.ico" },
    { id: 8, name: "Marker", price: 12, image: "./favicons/marker.ico" },
    { id: 9, name: "Sticky Notes (60)", price: 60, image: "./favicons/sticky.ico" },
    { id: 10, name: "Stapler", price: 50, image: "./favicons/stapler.ico" },
    { id: 11, name: "Paper Clips (10)", price: 5, image: "./favicons/clips.ico" },
    { id: 12, name: "Calculator", price: 250, image: "./favicons/calculator.ico" },
    { id: 13, name: "Paint Kit", price: 95, image: "./favicons/paint.ico" },
    { id: 14, name: "Paper Cutter", price: 35, image: "./favicons/razor.ico" },
    { id: 15, name: "Tape", price: 10, image: "./favicons/tape.ico" },
    { id: 16, name: "Sharpener", price: 5, image: "./favicons/sharpeners.ico" }
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
            <h2>${product.name}</h2>
            <p class="price">Rs. ${product.price.toFixed(2)}</p>
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
        alert("Cart Cleared")
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