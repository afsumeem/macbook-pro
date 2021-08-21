//variable declare

const memoryCost = document.getElementById('extra-memory-cost');
const storageCost = document.getElementById('extra-storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const total = document.getElementById('total-cost');
const initialPrice = document.getElementById('initial-price');
const grandTotal = document.getElementById('grand-total');



//calculate total cost and update grand total

function totalCost() {
    total.innerText = parseFloat(initialPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    grandTotal.innerText = total.innerText;
};

//check promo code 
function promoCode() {
    const codeField = document.getElementById('code-input');
    let code = codeField.value;
    codeField.value = '';
    return code;
}

// handle buttons for memory size
document.getElementById('8gb-memory-button').addEventListener('click', function () {
    memoryCost.innerText = 0;
    totalCost();
});
document.getElementById('16gb-memory-button').addEventListener('click', function () {
    memoryCost.innerText = 180;
    totalCost();
});

//handle buttons for storage
document.getElementById('256-storage-button').addEventListener('click', function () {
    storageCost.innerText = 0;
    totalCost();
});
document.getElementById('512-storage-button').addEventListener('click', function () {
    storageCost.innerText = 100;
    totalCost();
});
document.getElementById('1tb-storage-button').addEventListener('click', function () {
    storageCost.innerText = 180;
    totalCost();
});

// handle buttons for delivery cost
document.getElementById('free-delivery-button').addEventListener('click', function () {
    deliveryCost.innerText = 0;
    totalCost();
});
document.getElementById('charged-delivery-button').addEventListener('click', function () {
    deliveryCost.innerText = 20;
    totalCost();
});

//promo code
document.getElementById('apply-button').addEventListener('click', function () {
    if (promoCode() == 'stevekaku') {
        const newTotal = parseFloat(total.innerText * 0.8);
        grandTotal.innerText = newTotal;
    }
});
