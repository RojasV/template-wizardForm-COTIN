function login() {
    var username = $('#username').val();
    var password = $('#password').val();

    if (username.length > 0 && password.length > 0) {        
        toastr.success("Login efetuado com sucesso!");
    } else {
        toastr.error("Informe suas credenciais para continuar.", { "closeButton": true });
    }    
}

function recover() {
    var email = $('#email').val();

    if (email.length > 0) {        
        toastr.info("Enviamos um e-mail contendo instruções para recuperar a senha deste usuário.");
    } else {
        toastr.error("Informe o e-mail do usuário para receber maiores informações.", { "closeButton": true });
    } 
}

$(document).ready(function() {
    toastr.options.closeButton = true;

    // form login
    $('#form-login input').keypress(function(e) {
        if (e.which == 13)
            login();
    });

    // form recover
    $('#form-forget input').keypress(function(e) {
        if (e.which == 13)
            recover();
    });

    jQuery('#forget-option').click(function() {
        jQuery('#form-login').fadeOut(250, function() {
            jQuery('#form-forget').fadeIn();
        });        
    });

    jQuery('#back-btn').click(function() {
        jQuery('#form-forget').fadeOut(250, function() {
            jQuery('#form-login').fadeIn();
        });     
    });
});