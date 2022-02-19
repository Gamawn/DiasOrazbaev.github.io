let modal = $('#myModal');

let img = $('.product__img')
let modalIMG = $('#img01');
let captionText;

img.onclick(function() {
    modal.css("display", "blocks");
    modalIMG.src = this.src;
    captionText.text("SHOW");
})

const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}