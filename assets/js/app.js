function changeSize() {
    if (windows.innerWidth >= 768) {
        menu1.style.display = 'block'
    } else {
        menu1.style.display = 'none'
    }
}

function clickMenu() {
    if (menu1.style.display == 'block') {
        menu1.style.display = 'none'
    } else {
        menu1.style.display = 'block'
    }
}