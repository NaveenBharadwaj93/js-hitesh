// Immediately Invoked Function Expression (IIFE)
// what? IIFE function - is the one which immidiately executes.
// why? Some times, there will problems occur from global space declarations. to avoid any such problem we use IIFE. 

(function chai () { // Named IIFE
    console.log(`DB connected`);
})(); // Should use semi-cololn at the end. because iife doesnot know where to end the context.

// IIFE functions - ()() - first paranthesis is for creating a block, second paranthesis for execution.

( (name) => { // Simple (Unnamed) IIFE
    console.log(`DB connected 2 ${name}`);
})("Naveen");