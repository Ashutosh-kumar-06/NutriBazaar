   // Example list of products added to the cart (can be dynamically fetched)
   const cartItems = [
    { id: 1, name: "Horlicks", price: 12.99, quantity: 2, image: "https://via.placeholder.com/50" },
    { id: 2, name: "Bournvita", price: 10.99, quantity: 1, image: "https://via.placeholder.com/50" },
    { id: 3, name: "Boost", price: 14.50, quantity: 3, image: "https://via.placeholder.com/50" }
];

const cartTable = document.getElementById('cartItems');
const totalPriceEl = document.getElementById('totalPrice');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const checkoutBtn = document.getElementById('checkoutBtn');

// Function to render cart items dynamically
function renderCartItems() {
    cartTable.innerHTML = "";
    let total = 0;

    if (cartItems.length === 0) {
        emptyCartMessage.style.display = 'block';
        checkoutBtn.style.display = 'none';
        return;
    } else {
        emptyCartMessage.style.display = 'none';
        checkoutBtn.style.display = 'block';
    }

    cartItems.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        cartTable.innerHTML += `
            <tr>
                <td><img src="${item.image}" alt="${item.name}" class="cart-icon"></td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><input type="number" class="quantity" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)"></td>
                <td>$${subtotal.toFixed(2)}</td>
                <td><button class="remove-btn" onclick="removeItem(${item.id})">Remove</button></td>
            </tr>
        `;
    });

    totalPriceEl.textContent = total.toFixed(2);
}

// Function to update quantity
function updateQuantity(itemId, newQuantity) {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
        item.quantity = parseInt(newQuantity);
        renderCartItems();
    }
}

// Function to remove an item from the cart
function removeItem(itemId) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
        cartItems.splice(itemIndex, 1);
        renderCartItems();
    }
}

// Initial render
renderCartItems();

// Checkout button click handler
checkoutBtn.addEventListener('click', () => {
    alert(`Total amount: $${totalPriceEl.textContent}. Proceeding to checkout...`);
});