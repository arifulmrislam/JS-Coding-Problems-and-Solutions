
var arr = ["abcde", "fghi"];

function isolateIt(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        let len = arr[i].length;
        if(len % 2 == 0){
            let middle = len / 2;
            var res = arr[i].slice(0,middle)+ '|' +arr[i].slice(middle);
            result.push(res);
        }
        else{
            let middle = Math.floor(len / 2);
            var res = arr[i].slice(0,middle)+ '|' +arr[i].slice(middle+1);
            result.push(res);
        }
    }
    return result;
}

console.log(isolateIt(arr));