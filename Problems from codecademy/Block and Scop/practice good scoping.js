const logSkyColor = () => {
    const dusk = true;
    let color = 'blue';
    if (dusk) {
        let color = 'pink';
        console.log(color); // Prints "pink"
    }
    console.log(color); // Prints "blue"
};

console.log(color); // throws a ReferenceError


// const logVisibleLightWaves = () => {
//     let lightWaves = 'Moonlight';
//     let region = 'The Arctic';
//     // Add if statement here:
//     if (region === 'The Arctic') {
//         let lightWaves = 'Northern Lights';
//         console.log(lightWaves);
//     };
//     console.log(lightWaves);
// };

// logVisibleLightWaves();

function CheckNums(num1, num2) {
    if (num1 < num2) {
        return true;
    } else if (num1 > num2) {
        return false;
    } else if (num1 === num2) {
        return -1;
    } else {
        return 0;
    }
}
    // keep this function call here 

    console.log(CheckNums());