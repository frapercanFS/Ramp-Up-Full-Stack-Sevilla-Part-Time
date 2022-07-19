const datos_correcto = true

function validar() {
    function checkEmail() {
        const emailExpresion = new RegExp(/^[0-1 a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]{2,4}$/i);
        let email = document.getElementById(email).value;
        console.log(email)
        if (!emailExpresion.test(email)) {
            datos_correcto = false;
            alert('email no válido')
        }
    }


    checkEmail()

    function checkPassword() {
        let password = document.getElementById(password).value;
        console.log(password)
        const passwordExpresion = new RegExp(/.\S{6,20}/);
        if (!passwordExpresion.test(password)) {
            datos_correcto = false;
            alert('contraseña no valida')
        }
    }
    checkPassword()
    function checkRaza()
        let raza = document.getElementById(raza).value;
        console.log(raza)
        const razaExpresion = new RegExp(/^\s*$/);
        if (!razaExpresion.test(raza)) {
            datos_correcto = false;
            alert('Debemos saber su raza')
        }
        checkRaza()
}
validar()