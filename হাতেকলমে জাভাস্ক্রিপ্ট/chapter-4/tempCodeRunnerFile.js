const ageNew = 17;
try{
    if(ageNew < 18) {
        throw new Error = ('You are too young');
    } else {
        console.log('You are adult');
    }
} catch(err){
    console.log(err);
}