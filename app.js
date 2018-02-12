document.body.style.backgroundColor = "#222";
document.body.style.color = "#fff";
var browser = window.clientInformation.appName;

$(document).ready(function() {    
    if(browser == "Netscape") {
        $("html").addClass('Safari');
    };
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

