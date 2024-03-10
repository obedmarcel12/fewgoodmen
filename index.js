window.addEventListener('scroll', function () {
  var header2 = document.querySelector('.header-2')
  var scrollPosition = window.scrollY

  // Adjust this threshold as needed
  var threshold = 15

  if (scrollPosition > threshold) {
    header2.style.display = 'block'
  } else {
    header2.style.display = 'none'
  }
})
