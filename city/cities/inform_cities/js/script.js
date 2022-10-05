
let tabBtnItem = document.querySelectorAll('.tab_btn-item');
let tabBtnImg = document.querySelectorAll('.tab_btn-img');
let tabContentItem = document.querySelectorAll('.tab_content-item');

tabBtnItem.forEach((element, index) => {
    element.addEventListener('click', () => {
        tabBtnImg[index].classList.toggle('show')
        tabContentItem[index].classList.toggle('show');
    })
})