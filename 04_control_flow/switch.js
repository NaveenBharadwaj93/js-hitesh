// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break; // Since this case matches, if we put comment to break here all the code brlow will be executed
        // without checking the conditions except defaut
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}