// variables
let About = document.getElementById("About")
let home = document.getElementById('home')

home.addEventListener('click', () => {
    console.log(`click`);
    window.document.documentElement.scroll(0, 0)
    home.classList.add('active')
})
About.addEventListener('click', () => {
    console.log(`click`);
    window.document.documentElement.scroll(0, 550)
})