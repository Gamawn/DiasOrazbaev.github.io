$(document).ready(function(){
    let audio = document.getElementById("audio");
    audio.autoplay = true;

    $("#mute-toggle").click(function(){
        audio.muted = !$(this).hasClass("toggled");
        $(this).toggleClass("toggled");
    });
});