if (!localStorage.database) {
  base.defaultUsers();
}


$("#submit").on('click', function(event) {
  var emailPattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  var email = $('#sign_up_email').val();
  var password = $("#sign_up_pass").val();

  event.preventDefault();

  if (email == '' || password == '') {
    alert("Please fill all fields.");
  } else if ((password.length) < 8) {
    alert("Password should atleast 8 character in length.");
  } else if (email.length >= 256) {
    alert("Email length must be less than 256.");
  } else if (!emailPattern.test(email)) {
    alert("Correct email.")
  } else if (base.getUser(email)) {
    alert('User already exists')
  } else if (grecaptcha.getResponse() == "") {
    alert("Captcha.")
  }
  else {


    var nUser = {
      email: email,
      password: password
    }

    base.setUser(nUser);


    $('.pop_up_sign-up').removeClass('active');

  }
});
