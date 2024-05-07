$(document).ready(function () {
  const input = $("#login-pass");
  const iconEye = $("#login-eye");

  iconEye.on("click", function () {
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      iconEye.addClass("ri-eye-line").removeClass("ri-eye-off-line");
    } else {
      input.attr("type", "password");
      iconEye.removeClass("ri-eye-line").addClass("ri-eye-off-line");
    }
  });

  $(".login-input").on("change", function () {
    $(".error-msg-login").css("display", "none");
    $(".error-msg-pass").css("display", "none");
  });

  $(".login-form").on("submit", function (e) {
    e.preventDefault();
    let email = $("#login-email").val();
    let password = $("#login-pass").val();
  
    if(email === "" || password === ""){
      $(".error-msg-login").text("Please fill in all fields");
      $(".error-msg-pass").text("Please fill in all fields");
      $(".error-msg-login").css("display", "block");
      $(".error-msg-pass").css("display", "block");
      return;
    }

    if(password.length < 8){
      $(".error-msg-pass").text("Password must be at least 8 characters long");
      $(".error-msg-pass").css("display", "block");
      return;
    }

    const name = $("#login-email").val().split("@")[0];
    localStorage.setItem("auth", 1);
    localStorage.setItem("email", name);
    window.location.replace("/index.html");
  });
});
