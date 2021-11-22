let dayNight = document.querySelector('.dayNight')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')


dayNight.addEventListener('click', () => {
    body.classList.toggle('dark')
    dayNight.classList.toggle('active')
})

menuToggle.onclick = () => {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
