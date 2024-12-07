const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(items){
    let sum=0;
    let avg=0;

        items.forEach(item => {
        sum+=item.price+phones.length;
        avg=sum/phones.length;
    });
    return avg;
}

const result=findAveragePhonePrice(phones);
console.log(result);