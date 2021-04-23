function validateNames() {
    var regex = /^([A-ZÁÉÍÓÚa-zñáéíóú]+[\s].*)+$/;
    var name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("name-help").textContent = "Debe completar este campo.";
        document.getElementById("name-help").hidden = false;
    } else if (name.trim() !== "") {
        if (!regex.test(name)) {
            document.getElementById("name-help").textContent = "El nombre solo puede contener letras.";
            document.getElementById("name-help").hidden = false;
        } else if (regex.test(name)) {
            document.getElementById("name-help").hidden = true;
        }
    }

    var lastName = document.getElementById("last-name").value;
    if (lastName.trim() === "") {
        document.getElementById("last-name-help").textContent = "Debe completar este campo.";
        document.getElementById("last-name-help").hidden = false;
    } else if (lastName.trim() !== "") {
        if (!regex.test(lastName)) {
            document.getElementById("last-name-help").textContent = "El apellido solo puede contener letras.";
            document.getElementById("last-name-help").hidden = false;
        } else if (regex.test(lastName)) {
            document.getElementById("last-name-help").hidden = true;
        }
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
    } else if (dni !== "") {
        var separateDni = dni.split("-");
        var regex = /^\d{1,2}\d{3}\d{3}[-][0-9kK]{1}$/;
        if (!regex.test(dni)) {
            document.getElementById("dni-help").className = "alert alert-danger mt-1 text-end";
        } else if (regex.test(dni) && calculateDniDigit(parseInt(separateDni[0])) !== separateDni[1]) {
            document.getElementById("dni-help").textContent = "Rut no valido.";
            document.getElementById("dni-help").className = "alert alert-danger mt-1 text-end";
        } else if (regex.test(dni) && calculateDniDigit(parseInt(separateDni[0])) == separateDni[1]) {
            document.getElementById("dni-help").textContent = "Debe ingresar su rut sin puntos y con guion.";
            document.getElementById("dni-help").className = "form-text text-dark text-end";
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

function validateBirthDate() {
    var birthDate = document.getElementById("birth-date").value;
    if (birthDate === "") {
        document.getElementById("birth-date-help").textContent = "Debe completar este campo.";
        document.getElementById("birth-date-help").hidden = false;
    } else if (birthDate !== "") {
        var regex = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
        if (!regex.test(birthDate) || dateDiff(birthDate) < 0) {
            document.getElementById("birth-date-help").textContent = "La fecha ingresada es incorrecta.";
            document.getElementById("birth-date-help").hidden = false;
        } else if (regex.test(birthDate) && dateDiff(birthDate) < 18 && dateDiff(birthDate) >= 0) {
            document.getElementById("birth-date-help").textContent = "No tienes la edad suficiente.";
            document.getElementById("birth-date-help").hidden = false;
        } else if (regex.test(birthDate) && dateDiff(birthDate) >= 18) {
            document.getElementById("birth-date-help").hidden = true;
        }
    }
}

function validateCelphone() {
    var celphone = document.getElementById("celphone").value;
    if (celphone === "") {
        document.getElementById("celphone-help").textContent = "Debe completar este campo.";
        document.getElementById("celphone-help").hidden = false;
    } else if (celphone !== "") {
        var regex = /^([0-9]{9})*$/;
        if (!regex.test(celphone)) {
            document.getElementById("celphone-help").textContent = "El celular solo puede contener números y debe ser de 9 digitos.";
            document.getElementById("celphone-help").hidden = false;
        } else if (regex.test(celphone)) {
            document.getElementById("celphone-help").hidden = true;
        }
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    if (email === "") {
        document.getElementById("email-help").textContent = "Debe completar este campo.";
        document.getElementById("email-help").hidden = false;
    } else if (email !== "") {
        var regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if (!regex.test(email)) {
            document.getElementById("email-help").textContent = "Formato de email incorrecto.";
            document.getElementById("email-help").hidden = false;
        } else if (regex.test(email)) {
            document.getElementById("email-help").hidden = true;
        }
    }
}

function validateSelects(id, idHelper) {
    if (document.getElementById(id).value === "") {
        document.getElementById(idHelper).hidden = false;
    } else {
        document.getElementById(idHelper).hidden = true;
    }
}

function validateZipCode() {
    var zipCode = document.getElementById("zip-code").value;
    if (zipCode === "") {
        document.getElementById("zip-code-help").textContent = "Debe completar este campo.";
        document.getElementById("zip-code-help").hidden = false;
    } else if (zipCode !== "") {
        var regex = /^([0-9])*$/;
        if (!regex.test(zipCode)) {
            document.getElementById("zip-code-help").textContent = "El codigo postal solo puede contener números.";
            document.getElementById("zip-code-help").hidden = false;
        } else if (regex.test(zipCode)) {
            document.getElementById("zip-code-help").hidden = true;
        }
    }
}

function validatePassword() {
    var pass = document.getElementById("password").value;
    var itPass = false;
    if (pass === "") {
        document.getElementById("password-help").textContent = "Debe completar este campo.";
        document.getElementById("password-help").className = "alert alert-danger mt-1 text-end";
    } else if (pass !== "") {
        var regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
        if (!regex.test(pass)) {
            document.getElementById("password-help").textContent = "La contraseña debe tener entre 8 y 16 caracteres, " +
                "al menos una mayuscula y no debe contener simbolos.";
            document.getElementById("password-help").className = "alert alert-danger mt-1 text-end";
        } else if (regex.test(pass)) {
            document.getElementById("password-help").className = "form-text text-dark text-end";
            itPass = true;
        }
    }

    var passRepeat = document.getElementById("password-repeat").value;
    if (passRepeat === "") {
        document.getElementById("password-repeat-help").textContent = "Debe completar este campo.";
        document.getElementById("password-repeat-help").hidden = false;
    } else if (passRepeat !== "") {
        if (pass === passRepeat && itPass) {
            document.getElementById("password-repeat-help").className = "alert alert-success mt-1 text-end";
            document.getElementById("password-repeat-help").textContent = "Las contraseñas coinciden.";
            document.getElementById("password-repeat-help").hidden = false;
        } else if (pass === passRepeat && !itPass) {
            document.getElementById("password-repeat-help").hidden = true;
        } else if (pass !== passRepeat) {
            document.getElementById("password-repeat-help").className = "alert alert-danger mt-1 text-end";
            document.getElementById("password-repeat-help").textContent = "Las contraseñas no coinciden.";
            document.getElementById("password-repeat-help").hidden = false;
        }
    }
}

function validateTerms() {
    if (!document.getElementById("terms").checked) {
        document.getElementById("terms-help").className = "alert alert-danger mt-1 w-2";
        document.getElementById("terms-help").hidden = false;
    } else {
        document.getElementById("terms-help").hidden = true;
    }
}

function validateAddress() {
    var address = document.getElementById("address").value;
    if (address.trim() === "") {
        document.getElementById("address-help").textContent = "Debe completar este campo.";
        document.getElementById("address-help").hidden = false;
    } else if (address.trim() !== "") {
        var regex = /^([A-ZÁÉÍÓÚa-zñáéíóú]+[\s]*)+$/;
        if (!regex.test(address)) {
            document.getElementById("address-help").textContent = "Dirección no valida.";
            document.getElementById("address-help").hidden = false;
        } else if (regex.test(address)) {
            document.getElementById("address-help").hidden = true;
        }
    }

    var regex = /^([0-9])*$/;
    var number = document.getElementById("address-num").value;
    if (number === "") {
        document.getElementById("address-num-help").textContent = "Debe completar este campo.";
        document.getElementById("address-num-help").hidden = false;
    } else if (number !== "") {
        if (!regex.test(number)) {
            document.getElementById("address-num-help").textContent = "El campo solo puede contener números.";
            document.getElementById("address-num-help").hidden = false;
        } else if (regex.test(number)) {
            document.getElementById("address-num-help").hidden = true;
        }
    }

    var block = document.getElementById("address-block").value;
    if (block !== "") {
        if (!regex.test(block)) {
            document.getElementById("address-block-help").hidden = false;
        } else if (regex.test(block)) {
            document.getElementById("address-block-help").hidden = true;
        }
    }

    var dpto = document.getElementById("address-dpto").value;
    if (dpto !== "") {
        if (!regex.test(dpto)) {
            document.getElementById("address-dpto-help").hidden = false;
        } else if (regex.test(dpto)) {
            document.getElementById("address-dpto-help").hidden = true;
        }
    }
}

function validations() {
    validateNames();
    validateDni();
    validateBirthDate();
    validateCelphone();
    validateEmail();
    validateSelects("state", "state-help");
    validateSelects("city", "city-help");
    validateZipCode();
    validateAddress();
    validatePassword();
    validateSelects("account-type", "account-type-help");
    validateTerms();
}