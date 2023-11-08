const mobileNavShow = document.querySelector('.mobile-res')
const hamburgerMenuBtn = document.querySelector('.image-menu') 
const hamburgerMenuBtnClose = document.querySelector('.image-menu-close')
const main = document.querySelector('.main-container')


hamburgerMenuBtn.addEventListener('click', ()=>{
    mobileNavShow.classList.toggle('active')
    hamburgerMenuBtnClose.classList.toggle('show')
    hamburgerMenuBtn.classList.toggle('hide')
    main.classList.toggle('opacity')
})

hamburgerMenuBtnClose.addEventListener('click',()=>{
    mobileNavShow.classList.toggle('active')
    hamburgerMenuBtnClose.classList.remove('show')
    hamburgerMenuBtn.classList.remove('hide')
    main.classList.remove('opacity')
})

