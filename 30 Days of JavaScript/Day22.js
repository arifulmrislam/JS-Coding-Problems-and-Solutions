
// Toss with a biased coin

// @Input   NA
// @Output  Head/Tail (Biased towards Head)

function biasedHead(){
    //Adjust probability of getting heads
    const probabilityOfHeads = 0.8; //80%

    // Generate a random number between 0 and 1
    const r = Math.random();

    // Take decision of HEADS or TAILS based
    // on random number
    if(r<probabilityOfHeads){
        console.log('HEADS');
    }else{
        console.log('TAILS');
    }
}
biasedHead();