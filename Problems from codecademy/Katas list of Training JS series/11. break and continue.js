function grabDoll(dolls) {
    var bag = [];
    //coding here
    for (let i = 0; i < grabDoll.length; i++) {
        if (grabDoll[i] === 'Hello Kitty' || grabDoll[i] === 'Barbie doll') {
            push.bag(grabDoll[i]);
            continue;
        } else if (bag[i] === 3) {
            break;
        }
    }
    return bag;
}