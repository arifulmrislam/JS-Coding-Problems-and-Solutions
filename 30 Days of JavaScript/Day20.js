// Generate a random rgb color

// @Input NA
// @Output rgb(244, 234, 23)

function generateRGBColor(){

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return color = `RGB ${red},${green},${blue}`;

}

console.log(generateRGBColor())