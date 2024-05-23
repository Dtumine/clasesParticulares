
  class User {
    constructor(firstName, lastName, email, city) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.city = city;
    }
  }

  function submitForm() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const city = document.getElementById('city');      
    
    // Obtenemos los campos y los mensajes de error utilizando clases
    const fields = document.getElementsByClassName('input-field');
    const errorMessages = document.getElementsByClassName('error-message');
    let valid = true;

    for (let i = 0; i < fields.length; i++) {
      if (!fields[i].value.trim()) {
        fields[i].classList.add('error');  
        errorMessages[i].style.display = 'block';
        valid = false;
      } else {
        fields[i].classList.remove('error');
        errorMessages[i].style.display = 'none';
      }
    }

    if (valid) {
      var newUser = new User(firstName.value, lastName.value, email.value, city.value);
      console.log('Nuevo usuario registrado:', newUser);
    }
  }

