function skillpage() {
    event.preventDefault();
    window.location.href = "skills.html";
}
function loginpage() {
    event.preventDefault();
    window.location.href = "login.html";
}
document.getElementById("back-button").addEventListener("click", function() {
    window.history.back();
});