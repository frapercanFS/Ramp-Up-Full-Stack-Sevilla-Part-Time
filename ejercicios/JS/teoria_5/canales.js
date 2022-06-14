function mostrarTodasRazas(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.text())
    .then(text => document.getElementById('razas').innerHTML = text);
}
mostrarTodasRazas()