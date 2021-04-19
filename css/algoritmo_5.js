function resetNegativos(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}

console.log(resetNegativos([1, 2, -1, -3]));

function moverAdelante(array) {
    for (var i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
            array[i] = 0;
        } else {
            array[i] = array[i + 1];
        }
    }
    return array;
}

console.log(moverAdelante([1, 2, 3]));

function returnReverso(array) {
    var newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(returnReverso([1, 2, 3]));

function repetirValores(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i], array[i]);
    }
    return newArray;
}

console.log(repetirValores([4, "Ulysses", 42, false]));