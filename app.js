document.body.style.backgroundColor = "#222";
document.body.style.color = "#fff";

$(document).ready(function() {
    $('#login_page > .submit').click(function() {
        var lang = $("#lang").val();
        var formal = $("#formal").val();
        var FN = $('#firstname').val();
        var LN = $('#lastname').val();        
        G$(FN, LN).setLang(lang).setGreet("#greetings", formal).log();
    });
    
    $('#login_page > .clear').click(function() {
        console.clear();
    });
});

