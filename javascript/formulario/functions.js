function emptyFields() {
    if (document.getElementById("city").value === "") {
        document.getElementById("city-help").hidden = false;
    } else {
        document.getElementById("city-help").hidden = true;
    }

    if (document.getElementById("state").value === "") {
        document.getElementById("state-help").hidden = false;
    } else {
        document.getElementById("state-help").hidden = true;
    }

    if (document.getElementById("zip-code").value === "") {
        document.getElementById("zip-code-help").hidden = false;
    } else {
        document.getElementById("zip-code-help").hidden = true;
    }

    if (!document.getElementById("terms").checked) {
        document.getElementById("terms-help").hidden = false;
    } else {
        document.getElementById("terms-help").hidden = true;
    }
}

function validateNames() {
    if (document.getElementById("name").value === "") {
        document.getElementById("name-help").textContent = "Debe completar este campo.";
        document.getElementById("name-help").hidden = false;

    } else {
        document.getElementById("name-help").hidden = true;
        var regex = new RegExp("([0-1])+");
        var name = document.getElementById("name").value;
        if (regex.test(name)) {
            document.getElementById("name-help").textContent = "El nombre debe tener solo letras.";
            document.getElementById("name-help").hidden = false;
        }
    }

    if (document.getElementById("last-name").value === "") {
        document.getElementById("last-name-help").hidden = false;
    } else {
        document.getElementById("last-name-help").hidden = true;
        var regex = new RegExp("([0-1])+");
        var lastName = document.getElementById("last-name").value;
        if (regex.test(lastName)) {
            document.getElementById("last-name-help").textContent = "El apellido debe tener solo letras.";
            document.getElementById("last-name-help").hidden = false;
        }
    }
}

function validateDni() {
    if (document.getElementById("dni").value === "") {
        document.getElementById("dni-help").className = "form-text text-danger text-end";
    } else {
        document.getElementById("dni-help").className = "form-text text-dark text-end";
        var dni = document.getElementById("dni").value;
        var regex = new RegExp("[.]");
        if (regex.test(dni)) {
            document.getElementById("dni-help").className = "form-text text-danger text-end";
        }
    }
}

function validateEmail() {
    if (document.getElementById("email").value === "") {
        document.getElementById("email-help").textContent = "Debe completar este campo.";
        document.getElementById("email-help").hidden = false;
    } else {
        document.getElementById("email-help").hidden = true;
        var email = document.getElementById("email").value;
        var regex = new RegExp("[@]");
        if (!regex.test(email)) {
            document.getElementById("email-help").textContent = "Los email deben llevar @.";
            document.getElementById("email-help").hidden = false;
        }
    }
}

function passCoincidence() {
    var pass = document.getElementById("password").value;
    var passRepeat = document.getElementById("password-repeat").value;

    if (document.getElementById("password").value === "") {
        document.getElementById("password-help").hidden = false;
    } else {
        document.getElementById("password-help").hidden = true;
    }

    if (document.getElementById("password-repeat").value === "") {
        document.getElementById("password-repeat-help").textContent = "Debe completar este campo.";
        document.getElementById("password-repeat-help").hidden = false;
    } else {
        document.getElementById("password-repeat-help").hidden = true;
        if (pass === passRepeat) {
            document.getElementById("password-repeat-help").className = "form-text text-success text-end";
            document.getElementById("password-repeat-help").textContent = "Las contraseñas coinciden.";
            document.getElementById("password-repeat-help").hidden = false;
        } else if (pass !== passRepeat) {
            document.getElementById("password-repeat-help").className = "form-text text-danger text-end";
            document.getElementById("password-repeat-help").textContent = "Las contraseñas no coinciden.";
            document.getElementById("password-repeat-help").hidden = false;
        }
    }
}

function validations() {
    //emptyFields();
    validateNames();
    validateDni();
    validateEmail();
    passCoincidence();
}