$(document).ready(function () {
    $(".buy-button").click(function () {
        let name = $(this).parent().parent().find(".description").find(".productsname").text()
        let price = $(this).parent().parent().find(".description").find(".price").text()
        let image = $(this).parent().parent().parent().find("img").attr("src")
        let product = {
            name: name,
            price: price,
            image: image,
            quantity: 1,
        }
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let productIndex = cart.findIndex((p) => p.name === product.name);

        if (productIndex === -1) {
            cart.push(product);

        } else {
            cart[productIndex].quantity = parseInt(cart[productIndex].quantity) + parseInt(product.quantity);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    })
});