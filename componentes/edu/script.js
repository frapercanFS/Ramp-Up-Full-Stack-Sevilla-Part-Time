

var countDownDate = new Date("Dec 22, 2022 21:30:00").getTime();

function inicio() {
    setInterval(function () { calculoDistancia(); }, 1000);
}

function calculoDistancia() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("cuenta").innerHTML  = "Quedan " + days + "días " + hours + "horas "
    + minutes + "minutos " + seconds + " segundos para finalizar el Bootcamp";


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cuenta").innerHTML = "EL BOOTCAMP HA TERMINADO";

    }
}