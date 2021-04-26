var isValidated = true;
var modal = new bootstrap.Modal(document.getElementById("modal"), {
    keyboard: false
});

function validateLetters(string, idHelper) {
    var regex = /^([A-ZÁÉÍÓÚa-zñáéíóú]+[\s]*)+$/;
    if (string.trim() === "") {
        document.getElementById(idHelper).textContent = "Debe completar este campo.";
        document.getElementById(idHelper).className = "alert alert-danger mt-1 text-end";
        document.getElementById(idHelper).hidden = false;
        isValidated = false;
    } else if (string.trim() !== "") {
        if (!regex.test(string)) {
            document.getElementById(idHelper).textContent = "Este campo solo puede contener letras.";
            document.getElementById(idHelper).className = "alert alert-danger mt-1 text-end";
            document.getElementById(idHelper).hidden = false;
            isValidated = false;
        } else if (regex.test(string)) {
            document.getElementById(idHelper).hidden = true;
            isValidated = true;
        }
    }
}

function validateNumbers(stringNumbers, idHelper, required) {
    var regex = /^([0-9])*$/;
    if (stringNumbers === "" && required) {
        document.getElementById(idHelper).textContent = "Debe completar este campo.";
        document.getElementById(idHelper).className = "alert alert-danger mt-1 text-end";
        document.getElementById(idHelper).hidden = false;
        isValidated = false;
    } else if (stringNumbers !== "") {
        if (!regex.test(stringNumbers)) {
            document.getElementById(idHelper).textContent = "Este campo solo puede contener números.";
            document.getElementById(idHelper).className = "alert alert-danger mt-1 text-end";
            document.getElementById(idHelper).hidden = false;
            isValidated = false;
        } else if (regex.test(stringNumbers)) {
            document.getElementById(idHelper).hidden = true;
            isValidated = true;
        }
    }
}

function dateDiff(birthDate) {
    var dateStart = new Date(birthDate);
    var dateEnd = new Date();
    var dateDiff = dateEnd - dateStart;
    var yearDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30 * 12));
    return yearDiff;
}

function validateSelects(id, idHelper) {
    if (document.getElementById(id).value === "") {
        document.getElementById(idHelper).hidden = false;
        isValidated = false;
    } else {
        document.getElementById(idHelper).hidden = true;
        isValidated = true;
    }
}

function calculateDniDigit(dniNumbers) {
    var M = 0,
        S = 1;
    for (; dniNumbers; dniNumbers = Math.floor(dniNumbers / 10)) {
        S = (S + dniNumbers % 10 * (9 - M++ % 6)) % 11;
    }
    return S ? S - 1 : 'k';
}

function validateDni() {
    var dni = document.getElementById("dni").value;
    if (dni === "") {
        document.getElementById("dni-help").textContent = "Debe ingresar su rut sin puntos y con guion.";
        document.getElementById("dni-help").className = "alert alert-danger mt-1 text-end";
        isValidated = false;
    } else if (dni !== "") {
        var separateDni = dni.split("-");
        var regex = /^\d{1,2}\d{3}\d{3}[-][0-9kK]{1}$/;
        if (!regex.test(dni)) {
            document.getElementById("dni-help").className = "alert alert-danger mt-1 text-end";
            isValidated = false;
        } else if (regex.test(dni) && calculateDniDigit(parseInt(separateDni[0])) !== separateDni[1]) {
            document.getElementById("dni-help").textContent = "Rut no valido.";
            document.getElementById("dni-help").className = "alert alert-danger mt-1 text-end";
            isValidated = false;
        } else if (regex.test(dni) && calculateDniDigit(parseInt(separateDni[0])) == separateDni[1]) {
            document.getElementById("dni-help").textContent = "Debe ingresar su rut sin puntos y con guion.";
            document.getElementById("dni-help").className = "form-text text-dark text-end";
            isValidated = true;
        }
    }
}

function validateBirthDate() {
    var birthDate = document.getElementById("birth-date").value;
    if (birthDate === "") {
        document.getElementById("birth-date-help").textContent = "Debe completar este campo.";
        document.getElementById("birth-date-help").hidden = false;
        isValidated = false;
    } else if (birthDate !== "") {
        var regex = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
        if (!regex.test(birthDate) || dateDiff(birthDate) < 0) {
            document.getElementById("birth-date-help").textContent = "La fecha ingresada es incorrecta.";
            document.getElementById("birth-date-help").hidden = false;
            isValidated = false;
        } else if (regex.test(birthDate) && dateDiff(birthDate) < 18 && dateDiff(birthDate) >= 0) {
            document.getElementById("birth-date-help").textContent = "No tienes la edad suficiente.";
            document.getElementById("birth-date-help").hidden = false;
            isValidated = false;
        } else if (regex.test(birthDate) && dateDiff(birthDate) >= 18) {
            document.getElementById("birth-date-help").hidden = true;
            isValidated = true;
        }
    }
}

function validateCelphone() {
    var celphone = document.getElementById("celphone").value;
    if (celphone === "") {
        document.getElementById("celphone-help").textContent = "Debe completar este campo.";
        document.getElementById("celphone-help").hidden = false;
        isValidated = false;
    } else if (celphone !== "") {
        var regex = /^([0-9]{9})*$/;
        if (!regex.test(celphone)) {
            document.getElementById("celphone-help").textContent = "El celular solo puede contener números y debe ser de 9 digitos.";
            document.getElementById("celphone-help").hidden = false;
            isValidated = false;
        } else if (regex.test(celphone)) {
            document.getElementById("celphone-help").hidden = true;
            isValidated = true;
        }
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    if (email === "") {
        document.getElementById("email-help").textContent = "Debe completar este campo.";
        document.getElementById("email-help").hidden = false;
        isValidated = false;
    } else if (email !== "") {
        var regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if (!regex.test(email)) {
            document.getElementById("email-help").textContent = "Formato de email incorrecto.";
            document.getElementById("email-help").hidden = false;
            isValidated = false;
        } else if (regex.test(email)) {
            document.getElementById("email-help").hidden = true;
            isValidated = true;
        }
    }
}

function validatePassword() {
    var pass = document.getElementById("password").value;
    var itPass = false;
    if (pass === "") {
        document.getElementById("password-help").textContent = "Debe completar este campo.";
        document.getElementById("password-help").className = "alert alert-danger mt-1 text-end";
        isValidated = false;
    } else if (pass !== "") {
        var regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
        if (!regex.test(pass)) {
            document.getElementById("password-help").textContent = "La contraseña debe tener entre 8 y 16 caracteres, " +
                "al menos una mayuscula y no debe contener simbolos.";
            document.getElementById("password-help").className = "alert alert-danger mt-1 text-end";
            isValidated = false;
        } else if (regex.test(pass)) {
            document.getElementById("password-help").className = "form-text text-dark text-end";
            itPass = true;
            isValidated = true;
        }
    }

    var passRepeat = document.getElementById("password-repeat").value;
    if (passRepeat === "") {
        document.getElementById("password-repeat-help").textContent = "Debe completar este campo.";
        document.getElementById("password-repeat-help").hidden = false;
        isValidated = false;
    } else if (passRepeat !== "") {
        if (pass === passRepeat && itPass) {
            document.getElementById("password-repeat-help").className = "alert alert-success mt-1 text-end";
            document.getElementById("password-repeat-help").textContent = "Las contraseñas coinciden.";
            document.getElementById("password-repeat-help").hidden = false;
            isValidated = false;
        } else if (pass === passRepeat && !itPass) {
            document.getElementById("password-repeat-help").hidden = true;
            isValidated = true;
        } else if (pass !== passRepeat) {
            document.getElementById("password-repeat-help").className = "alert alert-danger mt-1 text-end";
            document.getElementById("password-repeat-help").textContent = "Las contraseñas no coinciden.";
            document.getElementById("password-repeat-help").hidden = false;
            isValidated = false;
        }
    }
}

function validateTerms() {
    if (!document.getElementById("terms").checked) {
        document.getElementById("terms-help").className = "alert alert-danger mt-1 w-2";
        document.getElementById("terms-help").hidden = false;
        isValidated = false;
    } else {
        document.getElementById("terms-help").hidden = true;
        isValidated = true;
    }
}

function fillModal() {
    var output = "Nombre: " + document.getElementById("name").value + " " +
        document.getElementById("last-name").value + "</br>" +
        "Rut: " + document.getElementById("dni").value + "</br>" +
        "Fecha de nacimiento: " + document.getElementById("birth-date").value + "</br>" +
        "Número celular: " + document.getElementById("celphone").value + "</br>" +
        "Correo electronico: " + document.getElementById("email").value + "</br>" +
        "Región: " + document.getElementById("state").value + "</br>" +
        "Ciudad: " + document.getElementById("city").value + "</br>" +
        "Dirección: " + document.getElementById("address").value +
        ", " + document.getElementById("address-num").value;

    if (document.getElementById("address-block").value !== "") {
        output += ", " + document.getElementById("address-block").value;
    }

    if (document.getElementById("address-dpto").value !== "") {
        output *= ", " + document.getElementById("address-dpto").value;
    }

    document.getElementById("modal-body").innerHTML = output;
}

function validations() {
    validateLetters(document.getElementById("name").value, "name-help");
    validateLetters(document.getElementById("last-name").value, "last-name-help");
    validateLetters(document.getElementById("address").value, "address-help");

    validateNumbers(document.getElementById("zip-code").value, "zip-code-help", true);
    validateNumbers(document.getElementById("address-num").value, "address-num-help", true);
    validateNumbers(document.getElementById("address-block").value, "address-block-help", false);
    validateNumbers(document.getElementById("address-dpto").value, "address-dpto-help", false);

    validateSelects("state", "state-help");
    validateSelects("city", "city-help");
    validateSelects("account-type", "account-type-help");

    validateDni();
    validateBirthDate();
    validateCelphone();
    validateEmail();
    validatePassword();
    validateTerms();

    if (!isValidated) {
        fillModal();
        modal.show();
    }
}