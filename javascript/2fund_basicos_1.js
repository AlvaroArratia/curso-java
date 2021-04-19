function getNumberArray() {
    var array = [];
    for (var i = 1; i <= 255; i++) {
        array.push(i);
    }
    return array;
}

console.log(getNumberArray());

function sumEvenNums() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumEvenNums());

function sumOddNums() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOddNums());

function sumArrayNums(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArrayNums([1, 2, 5]));
console.log(sumArrayNums([-5, 2, 5, 12]));

function arrayMax(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(arrayMax([-3, 3, 5, 7]));

function arrayAvg(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    var avg = sum / array.length;
    return avg;
}

console.log(arrayAvg([1, 3, 5, 7, 20]));

function getOddNumsArray() {
    var array = [];
    for (var i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }
    return array;
}

console.log(getOddNumsArray());

function greaterThanY(array, y) {
    var greaterThan = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > y) {
            greaterThan.push(array[i]);
        }
    }
    return greaterThan;
}

console.log(greaterThanY([1, 3, 5, 7], 3));

function squares(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] ** 2;
    }
    return array;
}

console.log(squares([1, 5, 10, -2]));

function replaceNegatives(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}

console.log(replaceNegatives([1, 5, 10, -2]));

function maxMinAvg(array) {
    var newArray = [];
    var max = array[0];
    var min = array[0];
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }

        if (array[i] < min) {
            min = array[i];
        }

        sum += array[i];
    }
    var avg = sum / array.length;
    newArray = [max, min, avg];
    return newArray;
}

console.log(maxMinAvg([1, 5, 10, -2]));

function swapStartEnd(array) {
    var temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
    return array;
}

console.log(swapStartEnd([1, 5, 10, -2]));

function numberToString(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = "Dojo";
        }
    }
    return array;
}

console.log(numberToString([-1, -3, 2]));