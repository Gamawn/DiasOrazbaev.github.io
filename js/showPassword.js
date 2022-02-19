function show_password() {
    let password = $("#password");
    let attr = password.attr("type") === "password" ? "text" : "password";
    password.attr("type", attr);
}

function hide_repeat() {
    let password = $("#retyped");
    let attr = password.attr("type") === "password" ? "text" : "password";
    password.attr("type", attr);
}