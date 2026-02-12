// Assigning logic on the dark and light mode button
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "IMG/photo_light.png")
  } else {
    img.setAttribute("src", "IMG/photo_dark.png")
  }
}
