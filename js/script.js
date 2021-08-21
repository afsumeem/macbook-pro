const firstMemoryButton = document.getElementById('8gb-memory-button');
const secondMemoryButton = document.getElementById('16gb-memory-button');
const firstStorageButton = document.getElementById('256-storage-button');
const secondStorageButton = document.getElementById('512-storage-button');
const thirdStorageButton = document.getElementById('1tb-storage-button');
const firstDeliveryButton = document.getElementById('free-delivery-button');
const secondDeliveryButton = document.getElementById('charged-delivery-button');
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
document.getElementById('apply-button').addEventListener('click', function () {
    document.getElementById('code-input')
})


firstMemoryButton.addEventListener('click', function () {
    memoryCost.innerText = 0;
    totalCost();
});
secondMemoryButton.addEventListener('click', function () {
    memoryCost.innerText = 180;
    totalCost();
});
firstStorageButton.addEventListener('click', function () {
    storageCost.innerText = 0;
    totalCost();
});
secondStorageButton.addEventListener('click', function () {
    storageCost.innerText = 100;
    totalCost();
});
thirdStorageButton.addEventListener('click', function () {
    storageCost.innerText = 180;
    totalCost();
});
firstDeliveryButton.addEventListener('click', function () {
    deliveryCost.innerText = 0;
    totalCost();
});
secondDeliveryButton.addEventListener('click', function () {
    deliveryCost.innerText = 20;
    totalCost();

});

