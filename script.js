var showingMenu = false 

function openMenu() {
  // Fjerner eller tilføjer en class, ved at toggle
  var links = document.getElementById("my-links")
  links.classList.toggle("hide-links")
  links.classList.toggle("show-links")

  showingMenu = !showingMenu;
}