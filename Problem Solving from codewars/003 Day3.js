
function validatePIN(pin) {

    if (typeof pin !== "string" || (pin.length != 4 && pin.length != 6)) {
        return false;
    }else {
        for (let i = 0; i < pin.length; i++) {
            if (isNaN(parseInt(pin[i]))) {
                return false;
            }
        }
        return true;
    }
}

console.log(validatePIN('12345'));