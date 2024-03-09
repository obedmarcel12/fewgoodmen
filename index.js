var prevScrollPos = window.pageYOffset
var header1Height = document.querySelector('.header-1').offsetHeight
var header2 = document.querySelector('.header-2')

window.addEventListener('scroll', function () {
  var currentScrollPos = window.pageYOffset

  if (currentScrollPos > header1Height) {
    header2.style.top = '0' // Show the second header
    header2.classList.remove('hide-content') // Show the content
  } else {
    header2.style.top = '-22vh' // Hide the second header
    header2.classList.add('hide-content') // Hide the content
  }

  prevScrollPos = currentScrollPos
})
