(function($){
    
    function setCookie(name, value, lifetime_days) {
        var exp = new Date();
        exp.setDate(new Date().getDate() + lifetime_days);
        document.cookie = name + '=' + value + ';expires=' + exp.toUTCString() + ';path=/';
    }
    
    function getCookie(name) {
        if(document.cookie) {
            var regex = new RegExp(escape(name) + '=([^;]*)', 'gm'),
            matches = regex.exec(document.cookie);
            if(matches) {
                return matches[1];
            }
        }
    }
    
    if( ! getCookie('clientIp') ){
        $.ajax({
            url: 'https://api.ipify.org?format=json',
            dataType: 'json',
            success:  function (data) {
                setCookie('clientIp', data.ip, 1);
            }
        });
    }
    
    $('input[name="spam_check"]').parent().hide();
    $('input[name="website"]').parent().hide();
        
    $('.sf_form').on('submit',function(e){
        e.preventDefault();
                            
        let form = $(this),
            variables = form.serialize() + '&domain=' + window.location.hostname + '&ip=' + getCookie('clientIp')
                    
        $.ajax({
            url: 'https://api.worldsupp.com/wp-json/simple-forms/v1/send',
            type: 'POST',
            dataType: 'json',
            data: {
                fields : variables
            },
            beforeSend: function(){
                $('body').addClass('sf_loading'); 
            },
            success: function (data) {
                $('body').removeClass('sf_loading');

                if(data.status == 'success'){
                    alert(data.message);
                    window.location.reload();
                }else{
                    alert(data.message);
                }
            }
        });
                  
    });

    
})(jQuery);