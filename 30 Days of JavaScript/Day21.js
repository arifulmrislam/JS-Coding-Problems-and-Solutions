// Shuffle an array randomly (fisher-yates algo)

// @Input       [ 1,2,3,4,5,6 ]
// @Output      [ 4,1,5,2, 6,3]

function shuffleArray(array){
    for(let i=array.length -1;i>=0;i--){
        //Generate a random index between 0 and 1
        const r = Math.random();
        const idx = Math.floor(r * (i+1));

        //Swap the elements ar indices i and j
        let temp = array[i];
        array[i] = array[idx];
        array[idx] = temp;
    }
    console.log(array);
}

shuffleArray([1, 2, 3, 4, 5, 6]);