const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active")
    navmenu.classList.remove("active")
}))


///  დამატების კოდი
let inputWraper = document.querySelector('.input-form');
let addButton = document.querySelector('.add-button');
let ul = document.querySelector('.ul-list');
let clearAllItems = document.querySelector('.clearlist');
let formElement = document.querySelector('.form-wraper');

formElement.addEventListener('submit', function(event){
    event.preventDefault();
    let value = inputWraper.value;
    if(value == " "){
        return;
    }
    let li = document.createElement('li');
    let btnDelete = document.createElement('i');
    btnDelete.classList.add("fa-solid", "fa-trash-can");
    btnDelete.addEventListener('click',function(){
        li.remove();
    })
    li.textContent = value;
    li.appendChild(btnDelete);
    ul.appendChild(li);
    inputWraper.value  = ' ';
})
clearAllItems.addEventListener('click',function(){
    ul.innerHTML = ' ';
})
