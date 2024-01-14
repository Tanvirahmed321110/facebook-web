
const settingMenu = document.querySelector('.setting-menu');

function settingMenuToggleF(){
    settingMenu.classList.toggle("setting-menu-toggle")
}


// dark-btn
let darkBtn = document.getElementById('dark-btn');

darkBtn.addEventListener('click',function(){
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');
    
    
    // check theme in local strage
    if(localStorage.getItem('theme') == 'light'){
        localStorage.setItem('theme', 'dark')
    }
    else {
        localStorage.setItem('theme','light')
    }
})



// set loacl stroage value

if(localStorage.getItem('theme') == 'light'){
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme')
}
else if(localStorage.getItem('theme') == 'dark'){
    darkBtn.classList.add('dark-btn-on')
    document.body.classList.add('dark-theme')
}
else{
    localStorage.setItem('theme','dark')
}