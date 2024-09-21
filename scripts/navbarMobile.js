function openMenu(){
    var mainBody = document.getElementById("body");
    mainBody.classList.add("stop-scrolling");

    var button = document.getElementById("mobileMenuButton");
    button.src = "https://cdn-icons-png.flaticon.com/128/10728/10728089.png";
    button.onclick = function() {closeMenu()};

    var mobileMenuElement = document.getElementById("mobileMenu");
    //mobileMenuElement.style.display = "block";
    mobileMenuElement.classList.remove("closed");
    mobileMenuElement.classList.add("open");
}
function closeMenu(){
    var mainBody = document.getElementById("body");
    mainBody.classList.remove("stop-scrolling");

    var button = document.getElementById("mobileMenuButton");
    button.src = "https://cdn-icons-png.flaticon.com/128/7711/7711100.png";
    button.onclick = function() {openMenu()};

    var mobileMenuElement = document.getElementById("mobileMenu");
    //setTimeout(() => {mobileMenuElement.style.display = "none";}, 300);
    mobileMenuElement.classList.remove("open");
    mobileMenuElement.classList.add("closed");
}