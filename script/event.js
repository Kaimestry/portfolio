const ham_menu = document.getElementById('ham_menu'); //toggle btn
let ham_menu_state = true;

const nav = document.getElementById('nav');

ham_menu.addEventListener('click', () => {
    //Toggle on
    ham_menu_state = !ham_menu_state; //flip state

    if (ham_menu_state) {
        toggle_appear(nav);
    } else {
        toggle_hide(nav)
    }
})