// for each loop

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (item) { // call backs doesnot have function name
//     console.log(item);
// })


// coding.forEach( (item) => {console.log(item);} )

// const printMe = (item) => (console.log(item))

// coding.forEach(printMe);

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "Java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "cpp",
        languageFileName : "c++"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})