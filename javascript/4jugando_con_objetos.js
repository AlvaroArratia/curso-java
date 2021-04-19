var users = [{
    name: "Michael",
    age: 37
}, {
    name: "John",
    age: 30
}, {
    name: "David",
    age: 27
}];

console.log("Edad de John:", users[1].age);
console.log("Nombre del primer objeto:", users[0].name);

for (var user of users) {
    console.log("Nombre:", user.name);
    console.log("Edad:", user.age);
}

console.log("Mayores de edad");
for (var user of users) {
    if (user.age >= 18) {
        console.log("Nombre:", user.name);
    }
}