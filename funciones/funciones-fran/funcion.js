function confirmacion() {
	var pregunta = confirm("¿Te gustaría ir a otro ejercicio?")
	if (pregunta){
		alert("Espero que te guste")
		window.location = "/ejercicios/CSS/carta/fran/carta.html";
	}
	else{
		alert("Perfecto, continua por aquí!")
	}
}