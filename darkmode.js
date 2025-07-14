// Check for previously saved mode
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Save preference
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
