let page = document.querySelector('.body');
let button = document.querySelector('.themeButton');
button.onclick = function(){
    page.classList.toggle('lightTheme')
    page.classList.toggle('darkTheme')
}