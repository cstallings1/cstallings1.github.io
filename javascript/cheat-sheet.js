function clickFunction() {
  document.getElementById("loopDropdown").classList.toggle("show");
};

function scrollFunction(id) {
  document.getElementById(id).scrollIntoView({
    // block: "end",
    behavior: "smooth"
  });
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdownButton')) {
    var dropdowns = document.getElementsByClassName("dropdown-items");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}