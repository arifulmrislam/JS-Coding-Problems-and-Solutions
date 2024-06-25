// Task
// function colorOf with 3 parameter r g b


function colorOf(r,g,b){
    
    var a = r.toString(16),
    b = g.toString(16),
    c = b.toString(16);

    return `#${a}${b}${c}`;
}

console.log(colorOf(255,0,0));