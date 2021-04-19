//////1. Tamaño Grande//////

function bigSize(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = "Big";
        }
    }
    return array;
}

console.log(bigSize([-1, 3, 5, -5]));

//////2. Imprime el menor, devuelve el mayor//////

function printMinReturnMax(array) {
    var max = array[0];
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log(min);
    return max;
}

console.log(printMinReturnMax([-1, 3, 5, -5]));

//////3.Imprime uno, devuelve otro//////

function printNumberReturnOdd(array) {
    console.log(array[array.length - 2]);
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            var firstOdd = array[i];
            break;
        }
    }
    return firstOdd;
}

console.log(printNumberReturnOdd([1, 3, 5, 5]));

//////4. Doble vision//////

function double(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}

console.log(double([1, 2, 3]));

//////5. Contar positivos//////

function positiveCount(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count++;
        }
    }
    array[array.length - 1] = count;
    return array;
}

console.log(positiveCount([-1, 1, 1, 1]));

//////6. Pares e impares//////

function evenAndOdd(array) {
    var countEven = 0,
        countOdd = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            countOdd++;
            if (countOdd == 3) {
                console.log("¡Que imparcial!");
                countOdd = 0;
            }
        } else if (array[i] % 2 === 0) {
            countEven++;
            if (countEven == 3) {
                console.log("¡Es para bien!");
                countEven = 0;
            }
        }
    }
}

evenAndOdd([1, 3, 5, 6, 2, 4]);

//////7. Incrementa los segundos//////

function increaseSeconds(array) {
    for (var i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            array[i]++;
        }
        console.log(array[i]);
    }
    return array;
}

console.log(increaseSeconds([1, 3, 5, 6, 2, 4]));

//////8. Longitudes previas//////

function previousLength(array) {
    for (var i = array.length - 1; i > 0; i--) {
        array[i] = array[i - 1].length;
    }
    return array;
}

console.log(previousLength(["programar", "dojo", "genial"]));

//////9. Agrega siete//////

function sumSeven(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i] + 7);
    }
    return newArray;
}

console.log(sumSeven([1, 2, 3]));

//////10. Array inverso//////

function reverseArray(array) {
    for (var i = 0; i < array.length; i++) {
        if (array.length - 1 - i < i) {
            break;
        }
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

console.log(reverseArray([3, 1, 6, 4, 2]));

//////11. Perspectiva: negativa//////

function negativePerspective(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            newArray.push(array[i] * -1);
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(negativePerspective([1, -3, 5]));

//////12. Siempre hambriento//////

function alwaysHungry(array) {
    var countFood = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "comida") {
            console.log("yummy");
            countFood++;
        }
    }

    if (countFood === 0) {
        console.log("tengo hambre");
    }
}

alwaysHungry([1, "comida", 5]);
alwaysHungry([1, 3, 5]);

//////13. Cambiar hacia el centro//////

function swapToCenter(array) {
    for (var i = 0; i < array.length; i = i + 2) {
        if (array.length - 1 - i < i) {
            break;
        }
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    console.log(array);
}

swapToCenter([true, 42, "Ada", 2, "pizza"]);
swapToCenter([1, 2, 3, 4, 5, 6]);

//////14. Escala el array//////

function scalarArray(array, num) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * num;
    }
    return array;
}

console.log(scalarArray([1, 2, 3], 3));