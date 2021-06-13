const elemsBtns = document.querySelectorAll(".fixed-action-btn");
const floatingBtn = M.FloatingActionButton.init(elemsBtns, {
    direction: "left",
    hoverEnabled: false
});
// Navbar
// const elemsDropdown = document.querySelectorAll(".dropdown-trigger")[0];
// const instancesDropdown = M.Dropdown.init(elemsDropdown, {
//     coverTrigger: false
// });
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        coverTrigger: false
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger2');
    var instances = M.Dropdown.init(elems, {
        coverTrigger: false
    });
});
const elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav, {
    edge: "left"
});
const elemShop = document.getElementById("shop");
elemShop.addEventListener('mouseenter', function() {
    elemShop.style.cssText = `
        color: #A9A9A9;
    `;
});
elemShop.addEventListener('mouseleave', function() {
    elemShop.style.cssText = `
        color: white;
    `;
});
