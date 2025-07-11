
let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    alert('Proceeding to checkout. Items: ' + cart.length);
}

function filterItems(category) {
    const items = document.querySelectorAll('.product-item');
    items.forEach(item => {
        item.style.display = item.classList.contains(category) ? 'block' : 'none';
    });
}
