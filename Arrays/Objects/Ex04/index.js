const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, 
    fridge: {
        price: 500,
        works: false, 
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;

if(hasOven === true && fridgeWorks === true)
{
    for(const item of kitchen.fridge.items)
    {
         console.log(`Geraldine's ${item.name}  expired ${item.expiryDate} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${item.name} in.`);
    }
}

if(hasOven === false && fridgeWorks === true)
{
    for(const item of kitchen.fridge.items)
    {
         console.log(`Geraldine's ${item.name}  expired ${item.expiryDate} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${item.name} in.`);
    }
}
if(hasOven === true && fridgeWorks === false)
{
    const fridgePrice = kitchen.fridge.price;
    for(const item of kitchen.fridge.items)
    {
         console.log(`Geraldine's ${item.name}  expired ${item.expiryDate} day ago.  Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${item.name} in. And she'll have to pay ${fridgePrice} to fix the fridge.`);
    }
}

if(hasOven === false && fridgeWorks === false)
{
    const fridgePrice = kitchen.fridge.price;
    for(const item of kitchen.fridge.items)
    {
         console.log(`Geraldine's ${item.name}  expired ${item.expiryDate} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${item.name} in. And she'll have to pay ${fridgePrice} to fix the fridge.`);
    }
}
