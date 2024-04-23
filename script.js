const productsData = [
    { id: 1, name: "Pen", price: 1.50, image: "./favicons/pen.ico" },
    { id: 2, name: "Pencil", price: 3.50, image: "./favicons/pencil.ico" },
    { id: 3, name: "Notebook", price: 2.00, image: "./favicons/notebook.ico" }
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
            <p>$${product.price.toFixed(2)}</p>
            <button class="addcart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}
  
// Function to add item to cart
function addToCart(productId) {
    const productToAdd = productsData.find(product => product.id === productId);
    if (productToAdd) {
        cartItems.push(productToAdd);
        updateCart();
    }
}
  
  // Function to update cart display
function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";
    let totalPrice = 0;
    
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });
  
    document.getElementById("cart-total").textContent = totalPrice.toFixed(2);
  
    // Update cart in cookies
    setCookie("cart", JSON.stringify(cartItems));
}
  
// Function to clear cart and cookies
function clearCart() {
    cartItems = [];
    updateCart();
}
  
// Function to handle checkout (you can customize this)
function checkout() {
    // Add your checkout logic here (e.g., redirect to checkout page)
    alert("Redirecting to checkout page...");
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