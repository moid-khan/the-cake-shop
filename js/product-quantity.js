const plus = document.getElementById("btnPlus")
const minus = document.getElementById("btnMinus")

var price = document.getElementById("cakePrice")

var quantity = document.getElementById("txtQty")

const firstPrice = Number(price.innerHTML)

var updatedPrice

function increment() {
    if (quantity.value > 0) {
        quantity.value = parseInt(quantity.value) + 1
        updatePrice()
    } else {
        quantity.value = 1
        updatePrice()
    }
}

function decrement() {
    if (quantity.value > 0) {
        quantity.value = parseInt(quantity.value) - 1
        updatePrice()
    } else {
        quantity.value = 1
        updatePrice()
    }
}

function updatePrice() {
    updatedPrice = Number(firstPrice) * parseInt(quantity.value)
    price.innerHTML = updatedPrice.toFixed(2)
}