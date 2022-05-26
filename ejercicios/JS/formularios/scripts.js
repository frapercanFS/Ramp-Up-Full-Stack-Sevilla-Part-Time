function validateForm(elemento) {
    if (elemento == "") {
      alert("Name must be filled out");
      return false;
    }
  } 


document.querySelector('form[name="star-trek"]').addEventListener('submit', (event) => {
    event.preventDefault()

    // console.log('evento: ',event)
    // console.log('target: ',event.target)
    // console.log('submitter: ',event.submitter)
    console.log('elementos', event.target.elements[2].value)

    console.log('Es "trekkie"? ', event.target.elements.trekkie.checked)
    console.log('El nombre de la prueba es: ', event.target.elements['academy-test'].value)
    console.log('El número de serie de la nave Enterprise es: ', event.target.elements.enterprise.value)

    validateForm(event.target.elements[2].value)




})

document.querySelector('form[name="dnd"]').addEventListener('submit', (event) => {
    event.preventDefault()

    console.log('Elminster', event.target.elements.elminster.value)
    console.log('Elminster', event.target.elements['elminster'].value)
})

document.querySelector('form[name="esdla"]').addEventListener('submit', (event) => {
    event.preventDefault()
    
    console.log('Gandalf', document.forms.esdla.elements.gandalf.value)
    console.log('Gandalf', document.forms['esdla'].elements['gandalf'].value)
})