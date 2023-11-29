/*

onclick function to show navbar, onclick=showsidebar()

Class name sidebar to open navbar ; for the ul or li element, <ul class="sidebar">

*/

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

/*

onclick function to hide navbar, onclick=hidesidebar()

Class name sidebar to close navbar ; for the ul or li element, <ul class="sidebar">

*/

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

