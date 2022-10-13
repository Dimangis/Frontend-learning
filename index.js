console.log('Hello world from index.js!') //можно объявить здесь

window.addEventListener('DOMContentLoaded', function () {
  console.log(document.querySelector('.text')) //первое совпадение
  console.log(document.querySelectorAll('.text')) // all (получаем NodeList - массив)
  document.querySelector('#text').style.color = 'blue' //с помощью id можно выбрать нужный элемент
  document.querySelector('.text').style.color = 'green'
  document.querySelector('.text').style.backgroundColor = 'red' //обратить внимание на запись backgroundColor
  document.querySelector('#text3').classList.add('alert')
  document.querySelector('#text3').classList.remove('alert')
  document.querySelector('#text3').classList.toggle('alert') // если нет класса - добавляет, если есть - удаляет
  this.document.querySelectorAll('.text').forEach(function (domElemet) { //domElemet называем сами
    domElemet.classList.add('alert')
  })
  console.log(this.document.getElementsByTagName('p'))
  console.log(this.document.querySelectorAll('p')) //для унификации и удобства лучше в использовании
})


//ДЛя меню
window.addEventListener('DOMContentLoaded', function () {
  this.document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })

//Для текста
  this.document.querySelectorAll('.textt').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.target.classList.toggle('alert')
    })
  })
})

