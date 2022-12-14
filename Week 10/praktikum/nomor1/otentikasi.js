document.getElementById('btn-login').addEventListener('click', login)

function login(event) {
  event.preventDefault()
  let inputUsername = document.getElementById("username").value
  let inputPassword = document.getElementById("password").value

  if (!inputUsername || !inputPassword) {
    alert("Email and Password required")
  } else {
    if (inputUsername === "ahmad2017" && inputPassword === "integrity") {
      alert("successful login")
      document.location.href = "home.html";
    } else {
      alert("Incorrect email or password")
      document.getElementById("username").value = ""
      document.getElementById("password").value = ""
    }
  }
}