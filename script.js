let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function setupFormBehavior() {
  const button1 = document.getElementById("signin");
  const button2 = document.getElementById("login");
  const welcome = document.getElementById("welcome");
  const fill = document.getElementById("fill");
  const details = document.getElementById("details");
  const submit = document.getElementById("sub");
  const passrem = document.getElementById("forgot-password");

  button1.onclick = function () {
    welcome.style.backgroundImage = "url(images/signin.jpg)";
    welcome.querySelector("h1").textContent = "Welcome to CodeNepal";
    welcome.querySelector("p").textContent = "Please fill in your details here!";
    fill.querySelector("h1").textContent = "SIGN IN";
    submit.textContent = "SIGN IN";
    passrem.textContent = "";

    if (!document.getElementById("first-name")) {
      const input = document.createElement("input");
      input.id = "first-name";
      input.name = "firstName";
      input.type = "text";
      input.className = "but";
      input.placeholder = "Enter your first name";
      details.insertBefore(input, details.firstChild);
    }
  };

  button2.onclick = function () {
    const restore = document.querySelector(".main-container");
    restore.innerHTML = originalHTML;
    setupFormBehavior(); // Re-bind handlers
    setupValidation();   // Re-apply validation
  };
}

function setupValidation() {
  document.getElementById("details").addEventListener("submit", function (event) {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    const errorMsg = document.getElementById("error-msg");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    if (!passwordRegex.test(password)) {
      event.preventDefault();
      errorMsg.textContent = "Password must contain at least one uppercase letter, one lowercase letter, and one number.";
      passwordInput.focus();
    } else {
      errorMsg.textContent = "";
    }
  });
}

// Save original HTML once page loads
const restore = document.querySelector(".main-container");
const originalHTML = restore.innerHTML;

setupFormBehavior();
setupValidation();