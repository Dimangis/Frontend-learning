document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
    // console.log(tabsBtn)
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.how__step-box').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active') // [выбор по атрибуту]
    })
  })
})