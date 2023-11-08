const hamburgerMenuBtn = document.querySelector('.image-menu') 
const hamburgerMenuBtnClose = document.querySelector('.image-menu-close')
const navShowAndHide = document.querySelector('.navlinks')
const backgroundBlur = document.querySelector('.main-container')



hamburgerMenuBtn.addEventListener('click', ()=>{
    navShowAndHide.classList.toggle('show')
    hamburgerMenuBtn.classList.add('hideImage')
    hamburgerMenuBtnClose.classList.add('showImage')
    backgroundBlur.classList.toggle('backgoundColor')

})

hamburgerMenuBtnClose.addEventListener('click',()=>{
    navShowAndHide.classList.remove('show')
    hamburgerMenuBtn.classList.remove('hideImage')
    hamburgerMenuBtnClose.classList.remove('showImage')
    backgroundBlur.classList.remove('backgoundColor')
})


