const usernameInput = document.querySelector(".username"),
    passwordInput = document.querySelector(".password"),
    loginError = document.querySelector(".error"),
    submitBtn = document.querySelector(".loginForm");

submitBtn.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    usernameValue = usernameInput.value;
    passwordValue = passwordInput.value;
    checkDetails();
});

const checkDetails = () => {
    // Check if the username and password match a predefined set of values
    if (usernameValue === "yashik" && passwordValue === "yashik1234") {
        // Redirect to the success page
        window.location.href = "./success.html";
    } else {
        loginError.innerHTML = "Invalid username or password";
    }
};



