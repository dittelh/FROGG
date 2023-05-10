function openMenu() {
  // Fjerner eller tilføjer en class, ved at toggle
  var links = document.getElementById("navigation")
  links.classList.toggle("show-links")

  if(links.classList.contains("show-links")){
    links.classList.add("hide-links")
  }
}


// Dropdown submenu 
function openDropdown(iconId, dropdownId) {
  var iconElement = document.getElementById(iconId)
  var dropdownElement = document.getElementById(dropdownId)

  dropdownElement.classList.toggle("hide-element")
  dropdownElement.classList.toggle("show-element")

  var span1 = iconElement.children[1]
  var span2 = iconElement.children[2]
 
  span1.classList.toggle("arrow-side-1")
  span2.classList.toggle("arrow-side-2")

  span1.classList.toggle("arrow-side-2")
  span2.classList.toggle("arrow-side-1")
}


// When the user scrolls the page, execute handleScrollBar
window.onscroll = function() {handleScrollBar()};

function handleScrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}


