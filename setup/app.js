// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const menu = document.querySelector(".menu-icon");
// console.log(menu)
const sidebar = document.querySelector(".sidebar");



menu.addEventListener("click", function () { 
    // if (sidebar.classList.contains('showsidebar')) {
    //     sidebar.classList.remove('showsidebar')
    // }
    // else {
    //     sidebar.classList.add('showsidebar')
    // }
    sidebar.classList.toggle('showsidebar')

})
   
