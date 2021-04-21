function validateNames() {
    if (document.getElementById("name").value === "") {
        document.getElementById("name-help").textContent = "Debe completar este campo.";
        document.getElementById("name-help").hidden = false;

    } else {
        document.getElementById("name-help").hidden = true;
        var regex = new RegExp("([0-1])+");
        var name = document.getElementById("name").value;
        if (regex.test(name)) {
            document.getElementById("name-help").textContent = "El nombre solo puede tener letras.";
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
            document.getElementById("last-name-help").textContent = "El apellido solo puede tener letras.";
            document.getElementById("last-name-help").hidden = false;
        }
    }
}

function validateDni() {
    if (document.getElementById("dni").value === "") {
        document.getElementById("dni-help").className = "alert alert-danger text-end";
    } else {
        document.getElementById("dni-help").className = "form-text text-dark text-end";
        var dni = document.getElementById("dni").value;
        var regex = new RegExp("^\d{1,2}\d{3}\d{3}[-][0-9kK]{1}$");
        if (!regex.test(dni)) {
            document.getElementById("dni-help").className = "alert alert-danger text-end";
        }
    }
}

function validateBirthDate() {
    if (document.getElementById("birth-date").value === "") {
        document.getElementById("birth-date-help").textContent = "Debe completar este campo.";
        document.getElementById("birth-date-help").hidden = false;
    } else {
        document.getElementById("birth-date-help").hidden = true;
        var yearNow = new Date().getFullYear();
        var birthDate = document.getElementById("birth-date").value;
        var regex = new RegExp("^(\d{4})(-)(0[1-9]|1[0-2])\2([0-2][0-9]|3[0-1])$");
        if (!regex.test(birthDate)) {
            document.getElementById("birth-date-help").textContent = "La fecha ingresada es incorrecta.";
            document.getElementById("birth-date-help").hidden = false;
        }
    }
}

function validateCelphone() {
    if (document.getElementById("celphone").value === "") {
        document.getElementById("celphone-help").textContent = "Debe completar este campo.";
        document.getElementById("celphone-help").hidden = false;
    } else {
        document.getElementById("celphone-help").hidden = true;
        var celphone = document.getElementById("celphone").value;
        var regex = new RegExp("^([0-9]{9})*$");
        if (!regex.test(celphone)) {
            document.getElementById("celphone-help").textContent = "El celular solo puede contener números y debe ser de 9 digitos.";
            document.getElementById("celphone-help").hidden = false;
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
        var regex = new RegExp("^[^@]+@[^@]+\.[a-zA-Z]{2,}$");
        if (!regex.test(email)) {
            document.getElementById("email-help").textContent = "Formato de email incorrecto.";
            document.getElementById("email-help").hidden = false;
        }
    }
}

function validateCity() {
    if (document.getElementById("city").value === "") {
        document.getElementById("city-help").hidden = false;
    } else {
        document.getElementById("city-help").hidden = true;
    }
}

function validateRegion() {
    if (document.getElementById("state").value === "") {
        document.getElementById("state-help").hidden = false;
    } else {
        document.getElementById("state-help").hidden = true;
    }
}

function validateZipCode() {
    if (document.getElementById("zip-code").value === "") {
        document.getElementById("zip-code-help").textContent = "Debe completar este campo.";
        document.getElementById("zip-code-help").hidden = false;
    } else {
        document.getElementById("zip-code-help").hidden = true;
        var zipCode = document.getElementById("zip-code").value;
        var regex = new RegExp("^([0-9])*$");
        if (!regex.test(zipCode)) {
            document.getElementById("zip-code-help").textContent = "El codigo postal solo puede contener números.";
            document.getElementById("zip-code-help").hidden = false;
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
            document.getElementById("password-repeat-help").className = "alert alert-success text-end";
            document.getElementById("password-repeat-help").textContent = "Las contraseñas coinciden.";
            document.getElementById("password-repeat-help").hidden = false;
        } else if (pass !== passRepeat) {
            document.getElementById("password-repeat-help").className = "alert alert-danger text-end";
            document.getElementById("password-repeat-help").textContent = "Las contraseñas no coinciden.";
            document.getElementById("password-repeat-help").hidden = false;
        }
    }
}

function validateTerms() {
    if (!document.getElementById("terms").checked) {
        document.getElementById("terms-help").className = "alert alert-danger w-2";
        document.getElementById("terms-help").hidden = false;
    } else {
        document.getElementById("terms-help").hidden = true;
    }
}

function validations() {
    validateNames();
    validateDni();
    //validateBirthDate();
    validateCelphone();
    validateEmail();
    validateCity();
    validateRegion();
    validateZipCode();
    passCoincidence();
    validateTerms();
}