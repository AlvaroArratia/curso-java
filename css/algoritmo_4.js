function printCount(array, y) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > y) {
            count++;
        }
    }
    console.log("Cantidad de valores mayores que y: " + count);
}

printCount([2, 7, 4, 9], 5);

function printMinMaxAvg(array) {
    var min = array[0];
    var max = array[0];
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }

        if (array[i] > max) {
            max = array[i];
        }

        sum += array[i];
    }
    var avg = sum / array.length;
    console.log("Valor maximo del array: " + max);
    console.log("Valor minimo del array: " + min);
    console.log("Promedio de los valores del array: " + avg);
}

printMinMaxAvg([2, 7, -4, 9]);

function negativeReplace(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = "Dojo"
        }
    }
    return array;
}

console.log(negativeReplace([1,2,-3,-5,5]));

function removeValuesInRange(array, start, end) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i > end || i < start) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeValuesInRange([20,30,40,50,60,70],2,4));