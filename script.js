(()=> {
    const menuBtn = document.querySelector('.hamburger-btn')
    const navBar = document.querySelector('.nav-list');
let menuStatus = false; 

menuBtn.addEventListener('click', ()=> { 
if(!menuStatus) { 
    navBar.classList.add('nav-list-open');
    menuStatus=true;
}
else { 
    navBar.classList.remove('nav-list-open');
    menuStatus=false;
}

})
}

)();