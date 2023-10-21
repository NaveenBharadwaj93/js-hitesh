const myNums = [1,2,3,4,5,6,7,8,9,10]

// Map - yella elements in an array lu yenadru operation madoke use mado function

const addTenToMyNums = myNums.map( (num) => {
    return num+10
})
// console.log(addTenToMyNums);

// same operation as above using forEach

// const newNums = []
// const forEachInMyNums = myNums.forEach( (num) => { // remember for each loop doesnot returns anything
//     newNums.push(num+10)
// } )

// console.log(newNums);

// Chaining

const newNums = myNums
                .map( (num) => num* 10) // [10,20,30,40,50,60,70,80,90,100]
                .map((num) => num + 1) //  [11,21,31,41,51,61,71,81,91,101]
                .filter( (num) => num >= 40) // [41,51,61,71,81,91,101]

console.log(newNums);