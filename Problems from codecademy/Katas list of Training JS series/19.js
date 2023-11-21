var str = "this is an example.";
var words = str.split(" ");

for (let i = 0; i < words.length; i += 1) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
}
console.log(words.join(" "));

const alienLanguage = (str) => {
    const words = str.split(" ");
    for (let i = 0; i < str.length; i += 1) {
        words[i] = words[i].replace(words[i][i - 1], words[i][i - 1].toLowerCase());
    }
    return words.join(" ");
}

alienLanguage = (str) => {
    const words = str.split(" ");

    for (let i = 0; i < words.length; i += 1) {
        words[i] = words[i].replace(words[i][words[i].length - 1], words[i][words[i].length - 1].toLowerCase());
    }

    return words.join(" ");
}