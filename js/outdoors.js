$(document).ready(function () {
    $(".link").click(function () { 
        let name = $(this).text()
        let price = $(this).parent().parent().find(".price").text()
        let image = $(this).parent().parent().find(".ii").attr("src")
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
    });
    $(".cart").click(function () {
        let name = $(this).parent().find("a").text()
        let price = $(this).parent().parent().find(".price").text()
        let image = $(this).parent().parent().find(".ii").attr("src")
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
    });
});
