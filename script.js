function openMenu() {
  // Fjerner eller tilføjer en class, ved at toggle
  var links = document.getElementById("navigation")
  links.classList.toggle("show-links")

  if(links.classList.contains("show-links")){
    links.classList.add("hide-links")
  }
}