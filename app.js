
let cart = [];

function addToCart(productId) {
    cart.push(productId);
    alert("Added to cart!");
    localStorage.setItem("cart", JSON.stringify(cart));
}
