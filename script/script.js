const toggleSideBar = ()=>{
    const nav = document.getElementById('menu_donot');
    if(nav.className === 'header__links'){
        nav.className += ' header__links--responsive';
        document.getElementById('menu_icon').className = 'hide-icon';
        document.getElementById('cancel_icon').className = '';
    } else{
        nav.className = 'header__links';
        document.getElementById('menu_icon').className = '';
        document.getElementById('cancel_icon').className = 'hide-icon';
    }
};

