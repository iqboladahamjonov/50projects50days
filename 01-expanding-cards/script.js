//to select the element, query selector allows us to select anything, -> p, h1, id, class...
const panels = document.querySelectorAll('.panel')

// console.log(panels)
// console.log(panels[0])
panels.forEach((panel) => {
  // console.log(panel)

  //now we want an event listner for each panel click
  panel.addEventListener('click', () => {
    // console.log(123)
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  // if there is only one argument for class, we can omit he brackets
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
