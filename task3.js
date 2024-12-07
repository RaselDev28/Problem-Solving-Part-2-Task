const electronics=[ 
    { name: "Laptop", price: 35000, quantity: 2 },
    { name: "Tablet", price: 15000, quantity: 3 },
    { name: "Mobile", price: 20000, quantity: 5 }
]
function calculatePrice(items){
    let totalCost=0;

    items.forEach(item => {
        totalCost+=item.quantity*item.price;
    });
    return totalCost;
}

const total= calculatePrice(electronics);
console.log(total);