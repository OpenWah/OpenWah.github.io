const btnSwitch = document.querySelector('#switch');
var actheme = localStorage.getItem('theme');

if (actheme == null){
    document.body.setAttribute('theme','dark')
}else{
    document.body.setAttribute('theme',actheme);
}

btnSwitch.addEventListener('click', () => {
    var catto = document.body.getAttribute('theme');
    if(catto == "dark"){
        document.body.setAttribute('theme','light');
        localStorage.setItem('theme', 'light');
        console.log(catto);
    }
    if (catto == "light"){
        document.body.setAttribute('theme','dark');
        localStorage.setItem('theme', 'dark');
        console.log(catto);
    }
    
});