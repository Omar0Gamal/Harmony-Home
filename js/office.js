$(document).ready(function(){
    $(".cart").click(function(){
        let name = $(this).parent().find("a").text()
        let price = $(this).parent().find("h3").text()
        let image = $(this).parent().find("img").attr("src")
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
})