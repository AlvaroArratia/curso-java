function createElementHtml(supElement, type, id, className, content) {
    var element = document.createElement(type);
    element.id = id;
    element.className = className;
    element.textContent = content;
    document.getElementById(supElement).insertAdjacentElement("afterend", element);
}

function emptyFields() {
    if (document.getElementById("name").value === "") {}

    if (document.getElementById("lastname").value === "") {}

    /*if (document.getElementById("dni").value === "") {
    }*/

    if (document.getElementById("email").value === "") {}


    if (document.getElementById("city").value === "") {}

    if (document.getElementById("state").value === "") {}

    if (document.getElementById("zipcode").value === "") {}


    if (document.getElementById("password").value === "") {}

    if (document.getElementById("repeatpassword").value === "") {}

}

function validateNames() {
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastname").value;
    var regex = new RegExp("([0-1])+");
    if (regex.test(name) && document.getElementById("namehelp") == null) {
        createElementHtml("name", "div", "nameHelp", "form-text text-danger text-end",
            "El nombre no puede contener números");
    }
    if (regex.test(lastName) && document.getElementById("namehelp") == null) {
        createElementHtml("name", "div", "lastnamehelp", "form-text text-danger text-end",
            "El apellido no puede contener números");
    }
}

function validateDni() {
    var dni = document.getElementById("dni").value;
    var regex = new RegExp("[.]");
    if (regex.test(dni)) {
        document.getElementById("dniHelp").className = "form-text text-danger";
    }
}

function validateEmail() {

}

function passCoincidence() {
    var pass = document.getElementById("password").value;
    var passRepeat = document.getElementById("repeatpassword").value;
    if (pass !== passRepeat && document.getElementById("repeatpasswordHelp") == null) {
        createElementHtml("repeatpassword", "div", "repeatpasswordHelp", "form-text text-danger text-end",
            "Las contraseñas no coinciden");
    } else if (pass !== passRepeat && document.getElementById("repeatpasswordHelp") !== null) {
        document.getElementById("repeatpasswordHelp").className = "form-text text-danger text-end";
        document.getElementById("repeatpasswordHelp").textContent = "Las contraseñas no coinciden";
    } else if (pass === passRepeat && document.getElementById("repeatpasswordHelp") == null) {
        createElementHtml("repeatpassword", "div", "repeatpasswordHelp", "form-text text-success text-end",
            "Las contraseñas coinciden");
    } else if (pass === passRepeat && document.getElementById("repeatpasswordHelp") !== null) {
        document.getElementById("repeatpasswordHelp").className = "form-text text-success text-end";
        document.getElementById("repeatpasswordHelp").textContent = "Las contraseñas coinciden";
    }
}

function validations() {
    emptyFields();
    validateNames();
    validateDni();
    //validateEmail();
    passCoincidence();
}