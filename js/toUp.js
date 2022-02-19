function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

let button = document.getElementById("toUp");

window.onscroll = function() {scrollFunction()};

function upper() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
