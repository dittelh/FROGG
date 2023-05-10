function openMenu() {
  // Fjerner eller tilføjer en class, ved at toggle
  var links = document.getElementById("navigation")
  links.classList.toggle("show-links")

  if(links.classList.contains("show-links")){
    links.classList.add("hide-links")
  }
}




// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}