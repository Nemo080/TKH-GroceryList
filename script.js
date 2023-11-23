let groceryItems = [{ name: 'Apple', category: 'Fruits', price: 1.0, quantity: 6 },
{ name: 'Banana', category: 'Fruits', price: 0.5, quantity: 10 },
{ name: 'Carrot', category: 'Vegetables', price: 0.8, quantity: 8 },
{ name: 'Milk', category: 'Dairy', price: 2.0, quantity: 2 },
{ name: 'Eggs', category: 'Dairy', price: 1.5, quantity: 12 }]

let groceryList = document.getElementById('groceryList')
let totalCostElement = document.getElementById('totalCost')
let totalQuantityElement =  document.getElementById('totalQuantity')

function displayGroceryItems (){
    groceryList.innerHTML = '';
    let totalCost = 0;
    let totalQuantity = 0;
    groceryItems.forEach( (item) => {
        let itemDiv = document.createElement("div")
        itemDiv.innerText = `${item.name} (${item.category}): $${item.price.toFixed(2)} - ${item.quantity} units`;
        groceryList.append(itemDiv);
        totalCost += item.price *item.quantity;
        totalQuantity += item.quantity;
    });
    totalCostElement.innerHTML = `Total Cost = $${totalCost.toFixed(2)}`;
    totalQuantityElement.innerHTML = `Total Quantity = ${totalQuantity}`;
}


function isolateCategory (category){
    groceryList.innerHTML = '';
    let filteredItems = groceryItems.filter((item) => {return item.category === category});
    filteredItems.forEach( (item) => {
        let itemDiv = document.createElement("div");
        itemDiv.innerText = `${item.name} (${item.category}): $${item.price} - ${item.quantity} units`;
        groceryList.append(itemDiv);
    })
}

function showAllCategories (){
    displayGroceryItems();
}

function orderItemsByCost() {
    groceryItems.sort(function (a, b) {
        return b.price - a.price
    })
    displayGroceryItems();
}

function addItemPrompt() {
    let name = prompt("Enter the name of the item");
    let category = prompt("Enter the category of the item");
    let price = prompt("Enter the price of the item");
    let quantity = prompt("Enter the quantity of the item");
    if (!name || !category || !price || !quantity) {
        alert("You are missing the name of the item!")
        alert("You are missing the category of the item!")
        alert("You are missing the price of the item!")
        alert("You are missing the quantity of the item!")
        return
    }
    let priceValue = parseFloat(price);
    let quantityValue = parseInt(quantity);
    if (isNaN(priceValue) || isNaN(quantityValue)){
        alert("Not a valid numeric value")
        return
    }
    let newItem = {
        name: name,
        category: category,
        price: price,
        quantity: quantityValue,
    }
    groceryItems.push(newItem);
    displayGroceryItems();
}
displayGroceryItems();