// Smooth Scrolling for Navigation
document.querySelectorAll('header ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Background Video Compatibility Check
window.addEventListener('load', () => {
    const video = document.getElementById('background-video');
    if (!video.canPlayType) {
        alert('Your browser does not support video playback. Please update or use a modern browser.');
    }
});

// Open Product Detail Modal
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', () => {
        const image = product.querySelector('img').src;
        const name = product.querySelector('h3').innerText;
        const price = product.querySelector('.price-overlay').innerText;

        document.getElementById('modal-image').src = image;
        document.getElementById('modal-name').innerText = name;
        document.getElementById('modal-price').innerText = price;
        document.getElementById('product-detail-modal').style.display = 'block';
    });
});

// Close Modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('product-detail-modal').style.display = 'none';
});

// Add Items to Cart
let cart = [];
document.getElementById('add-to-cart-modal').addEventListener('click', () => {
    const name = document.getElementById('modal-name').innerText;
    const price = parseFloat(document.getElementById('modal-price').innerText.replace('$', ''));

    cart.push({ name, price });
    updateCart();
    document.getElementById('product-detail-modal').style.display = 'none';
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(itemDiv);
        total += item.price;
    });

    cartTotal.innerText = total.toFixed(2);
    document.getElementById('cart-count').innerText = cart.length;
}

// Search Functionality
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    document.querySelectorAll('.product').forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'inline-block';
        } else {
            product.style.display = 'none';
        }
    });
});