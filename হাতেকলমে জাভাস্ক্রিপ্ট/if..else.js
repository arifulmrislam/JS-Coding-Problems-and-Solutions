/* var whatDay = "Friday";

if( whatDay === "Thursday"){
    console.log("It's normal working day");
}else if(whatDay === 'Saturday'){
    console.log("It's partially closed today");
}else if(whatDay === 'Friday'){
    console.log("It's closed today");
}else{
    console.log("It's normal working day");
} */


var whatDay = "Friday";

switch(whatDay){
    case "Sunday":
        console.log("It's partially open.");
        break;
    case "Monday":
        console.log("It's open.");
        break;
    default:
        console.log("It's closed today");
}