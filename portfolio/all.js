
//1. addEventListener 綁定監聽
// // 此方法.toggle中間的svg沒有效果
// const menuToggle = document.querySelector('.toggle');
// menuToggle.addEventListener('click', function (e) {
//     e.target.classList.toggle('active');
// })

//2. 可以用vue試試看！

function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    menuToggle.classList.toggle('active');
}