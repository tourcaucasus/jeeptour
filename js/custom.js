$(function (){
    var contact_form = $('#form-contact');
    if (contact_form.length > 0) {
        var btn = contact_form.find('#btn-send-message');
        btn.click(function (){
            var data = {
                name: $('#Name').val(),
                _replyto: $('#contact-email').val(),
                message: $('#contact-message').val()
            };
            $.ajax({
                url: "//formspree.io/tourcaucasus@gmail.com",
                method: "POST",
                data: data,
                dataType: "json",
                success: function (res){
                    alert("Your message has been sent, we'll answer as soon as possible!");
                    window.location.href = '/';
                }
            });
        });
    }
});