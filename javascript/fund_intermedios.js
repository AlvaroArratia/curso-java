//////1. Sigma//////

function sigma(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(sigma(3));
console.log(sigma(5));

//////2. Factorial//////

function factorial(num) {
    var fact = 1;
    for (var i = 1; i < num; i++) {
        fact = fact * (i + 1);
    }
    return fact;
}

console.log(factorial(3));

//////3. Fibonacci//////

function fibonacci(num) {
    var fib;
    if (num === 0) {
        fib = 0;
    } else if (num === 1) {
        fib = 1;
    } else {
        fib = fibonacci(num - 2) + fibonacci(num - 1);
    }
    return fib;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(7));

//////4. Array: penultimo//////

function returnPenultimate(array) {
    if (array.length === 1) {
        return null;
    } else {
        return array[array.length - 2];
    }
}

console.log(returnPenultimate([42, true, 4, "Liam", 7]));
console.log(returnPenultimate([42]));

//////5. Array: "N" ultimo//////

function lastN(array, index) {
    if (index > array.length) {
        return null;
    }
}

console.log(lastN([5, 2, 3, 6, 4, 9, 7], 3));

//////6. Array: segundo mas grande//////

function secondLargest(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array[array.length - 2];
}

console.log(secondLargest([42, 1, 4, 3.14, 7]));

//////7. Doble problema par//////

function doubleEvenTrouble(array) {
    var length = array.length;
    for (var i = 0; i < length; i++) {
        array.push(array[i]);
    }

    var count = 0;
    for (var j = length; j < array.length; j++) {
        for (var x = 0; x < 2; x++) {
            array[count] = array[j];
            count++;
        }
    }
    return array;
}

console.log(doubleEvenTrouble([4, "Ulysses", 42, false, "Hola"]));