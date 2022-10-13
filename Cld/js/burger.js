window.addEventListener('DOMContentLoaded', function () {
  this.document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })
  this.document.querySelector('#burger-close').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})