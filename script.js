// nav: dropdown
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// powiększanie zdjęć
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");
// Declare a loop variable
var i;
// Full-width images
function three() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "33%";  // IE10
    elements[i].style.flex = "33%";
  }
}

