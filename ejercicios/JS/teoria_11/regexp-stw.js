function checkForm() {
    let email = document.forms[0][0].value;
    let pass = document.forms[0][1].value;
    let race = document.forms[0][2].value;
    const reEmail = /^[\w-\.]+@[\w-]+\.+[\w]{2,4}$/;
    const rePass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //const reRace = /^()
    let validateEmail = reEmail.test(email);
    let validatePass = rePass.test(pass);
    let validateRace = reRace.test(race);
    if (!validateEmail) (alert("email no valido"));
    if (!validatePass) (alert("contraseña no valida"));
    if (!validateRace) (alert("elige una de las razas disponibles"));
}