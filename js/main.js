document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartIcon = document.querySelector('.cart-icon');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const product = {
                id: card.dataset.id,
                name: card.dataset.name,
                price: parseFloat(card.dataset.price),
                quantity: 1
            };

            const existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push(product);
            }

            updateCartIcon();
            alert(`${product.name} ha sido añadido al carrito.`);
            console.log(cart);
        });
    });

    function updateCartIcon() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        // This is a placeholder for a more complex cart icon update
        console.log(`Total items in cart: ${totalItems}`);
    }

    cartIcon.addEventListener('click', () => {
        // This will be replaced by a proper checkout modal or page
        let cartContents = "Contenido del carrito:\n";
        let totalPrice = 0;
        cart.forEach(item => {
            cartContents += `${item.name} - ${item.quantity} x $${item.price.toLocaleString('es-CO')} COP\n`;
            totalPrice += item.price * item.quantity;
        });
        cartContents += `\nTotal: $${totalPrice.toLocaleString('es-CO')} COP`;
        alert(cartContents);
    });
});
