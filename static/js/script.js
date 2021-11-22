let menuToggle = document.querySelector('.menuToggle')
let navigation = document.querySelector('.navigation')


menuToggle.onclick = () => {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

