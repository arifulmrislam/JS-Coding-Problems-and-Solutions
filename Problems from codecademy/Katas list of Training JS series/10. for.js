function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 === 0){
            arr.push(arr[i]);
        }else{
            arr.push(arr[i]);
        }
    }
    
    return [odd,even];
}