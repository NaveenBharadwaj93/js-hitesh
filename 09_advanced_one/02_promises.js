const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, Network calls
    setTimeout(()=>{
        console.log("async task is complete");
        resolve()
    },1000)

}) // promise takes in call back fn

// we should consume the created promise

promiseOne.then(function(){
    console.log("Promise consumed"); // connected because we are using resolve() inside promise.
})// resolve ka connection h ".then" ke saath. it takes in call back fn

new Promise((resolve,reject)=>{ // no compulsion to store promise inside a variable.
    setTimeout(()=>{
        console.log("async task 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("async 2 resolved");
})

const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({user:"Naveen",email:"Naveen.satish24@gmail.com"})
    },1000)
})

PromiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if (!error) {
            resolve({username:"Naveen",Password:"123"})
        }else{
            reject('ERROR : Something went wrong')
        }
    },2000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.user
})
.then((username) => {// this call back function can hold valur returned by last .then
    console.log(username);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("The promise is either resolved/rejected");
})


const promiseFive = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = true;
        if (!error) {
            resolve({username:"javascript",Password:"123"})
        }else{
            reject('ERROR : javascript went wrong')
        }
    },2000)
})

async function consumePromiseFive(){
   try {    const response = await promiseFive;
        console.log(response)}
        catch(error){
            console.log(error);
        }
}

consumePromiseFive()


// async function getAllUSers(){
// try {
//     const response = await fetch('https://api.github.com/users/NaveenBharadwaj93')
//     // console.log(response);
//     console.log(typeof response);
//     const data = await response.json()
//     console.log(data);
// } catch (e) {
//     console.log('Error is ',e);
// }
// }

// getAllUSers()


fetch('https://api.github.com/users/NaveenBharadwaj93')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})







