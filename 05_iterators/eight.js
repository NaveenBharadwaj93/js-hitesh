// reduce

const myNums = [1,2,3]
const initialValue = 0

// accumulator first time takes the value of initialvalue and later in each iteration result of operation is stored in it.

// const sumOfAllElements = myNums.reduce((accumulator,currentvalue) =>{ 
//     console.log(`acc value is ${accumulator} and value is ${currentvalue}`);
//     return accumulator+currentvalue
// },initialValue)

const sumOfAllElements = myNums.reduce( (acc,num) => acc+num,0)

// console.log(sumOfAllElements);

const shoppingCart = [
    {
        itemName : 'js',
        price : 2999
    },
    {
        itemName : 'python',
        price : 999
    },
    {
        itemName : 'mobile Dev',
        price : 5000
    },
    {
        itemName : 'Data scientist',
        price : 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc,currObj) => (acc + currObj.price),0)

console.log(priceToPay);


