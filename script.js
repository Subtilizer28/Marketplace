const stationeryData = [
    { id: 1, name: "Pen", price: 10, image: "./favicons/pen.ico" },
    { id: 2, name: "Pencil", price: 5, image: "./favicons/pencil.ico" },
    { id: 3, name: "Notebook", price: 25, image: "./favicons/notebook.ico" },
    { id: 4, name: "Ruler", price: 15, image: "./favicons/ruler.ico" },
    { id: 5, name: "Crayon (15)", price: 45, image: "./favicons/crayon.ico" },
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
    { id: 16, name: "Sharpener", price: 5, image: "./favicons/sharpeners.ico" },
];

const groceryData = [
    { id: 17, name: "Carrots (1 kg)", price: 60, image: "./favicons/carrots.ico" },
    { id: 18, name: "Onion (1 kg)", price: 24, image: "./favicons/onion.ico" },
    { id: 19, name: "Potatoes (1 kg)", price: 16, image: "./favicons/potatoes.ico" },
    { id: 20, name: "Tomatoes (1 kg)", price: 20, image: "./favicons/tomatoes.ico" },
    { id: 21, name: "Rice (1 kg)", price: 60, image: "./favicons/rice.ico" },
    { id: 22, name: "Sugar (1 kg)", price: 35, image: "./favicons/sugar.ico" },
    { id: 23, name: "Tea Powder (1 kg)", price: 300, image: "./favicons/tea.ico" },
    { id: 24, name: "Salt (1 kg)", price: 12, image: "./favicons/salt.ico" },
    { id: 25, name: "Chilli (1 kg)", price: 400, image: "./favicons/chilli.ico" },
    { id: 26, name: "Beetroot (1 kg)", price: 30, image: "./favicons/beetroot.ico" },
    { id: 27, name: "Garlic (1 kg)", price: 320, image: "./favicons/garlic.ico" },
    { id: 28, name: "Beans (1 kg)", price: 60, image: "./favicons/beans.ico" },
    { id: 29, name: "Wheat (1 kg)", price: 70, image: "./favicons/wheat.ico" },
    { id: 30, name: "Coconut Oil (1 kg)", price: 150, image: "./favicons/oil.ico" },
    { id: 31, name: "Apple (1 kg)", price: 60, image: "./favicons/apple.ico" },
    { id: 32, name: "Orange (1 kg)", price: 60, image: "./favicons/orange.ico" },
];
  
const electronicsData = [
    { id: 33, name: "TV (42in)", price: 25000, image: "./favicons/tv.ico" },
    { id: 34, name: "Mobile (Oneplus)", price: 38000, image: "./favicons/mobile.ico" },
    { id: 35, name: "Laptop (Asus)", price: 86000, image: "./favicons/laptop.ico" },
    { id: 36, name: "Mouse", price: 500, image: "./favicons/mouse.ico" },
    { id: 37, name: "Keyboard", price: 700, image: "./favicons/keyboard.ico" },
    { id: 38, name: "USB C Cable", price: 150, image: "./favicons/cable.ico" },
    { id: 39, name: "Printer", price: 12000, image: "./favicons/printer.ico" },
    { id: 40, name: "Speaker (22W)", price: 7000, image: "./favicons/speaker.ico" },
    { id: 41, name: "Earphones", price: 250, image: "./favicons/earphones.ico" },
    { id: 42, name: "PS5", price: 45000, image: "./favicons/ps5.ico" },
    { id: 43, name: "DVD Player", price: 3000, image: "./favicons/dvd.ico" },
    { id: 44, name: "Water Heater", price: 7000, image: "./favicons/heater.ico" },
    { id: 45, name: "Washing Machine", price: 18000, image: "./favicons/washing.ico" },
    { id: 46, name: "Driller", price: 2000, image: "./favicons/driller.ico" },
    { id: 47, name: "Hair Dryer", price: 1500, image: "./favicons/dryer.ico" },
    { id: 48, name: "Table Fan", price: 1200, image: "./favicons/fan.ico" },
];
// Initialize cart items from cookies or an empty array
let cartItems = JSON.parse(getCookie("cart")) || [];

// Function to display products
function displaystationery() {
    const stationeryContainer = document.getElementById("products");
    stationeryContainer.innerHTML = "";
    stationeryData.forEach(product => {
        const stationeryCard = document.createElement("div");
        stationeryCard.classList.add("product-card");
        stationeryCard.innerHTML = `
            <center><img src="${product.image}"><center><br>
            <h2>${product.name}</h2>
            <p class="price">Rs. ${product.price.toFixed(2)}</p><br>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        stationeryContainer.appendChild(stationeryCard);
    });
}

// Function to display products
function displaygrocery() {
    const groceryContainer = document.getElementById("products");
    groceryContainer.innerHTML = "";
    groceryData.forEach(product => {
        const groceryCard = document.createElement("div");
        groceryCard.classList.add("product-card");
        groceryCard.innerHTML = `
            <center><img src="${product.image}"><center><br>
            <h2>${product.name}</h2>
            <p class="price">Rs. ${product.price.toFixed(2)}</p><br>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        groceryContainer.appendChild(groceryCard);
    });
}

// Function to display products
function displayelectronics() {
    const electronicsContainer = document.getElementById("products");
    electronicsContainer.innerHTML = "";
    electronicsData.forEach(product => {
        const electronicsCard = document.createElement("div");
        electronicsCard.classList.add("product-card");
        electronicsCard.innerHTML = `
            <center><img src="${product.image}"><center><br>
            <h2>${product.name}</h2>
            <p class="price">Rs. ${product.price.toFixed(2)}</p><br>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        electronicsContainer.appendChild(electronicsCard);
    });
}
  
// Function to add item to cart
function addToCart(productId) {
    const productToAdd = stationeryData.find(product => product.id === productId) || groceryData.find(product => product.id === productId) || electronicsData.find(product => product.id === productId);
    if (productToAdd) {
        const existingItem = cartItems.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++; // Increase quantity if item already exists
        } else {
            if (cartItems.length >= 20) {
                alert("You can add a maximum of 20 items to your cart.");
                return; // Stop further execution
            }
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
        const cartitem = document.createElement("div");
        cartitem.classList.add("cart-card");
        cartitem.innerHTML = 
        `<img src="${item.image}" height="40px" style="padding-right: 20px">
        <p class="price">${item.name}<br>
        Rs. ${(item.price * item.quantity).toFixed(2)}<br>
        Qty x${item.quantity}
        </p>`;
        cartItemsList.appendChild(cartitem);
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
    updateCart();
};