$(document).ready(function(){
    //Captcha Number
    var captcha=Math.floor((Math.random() * 10000) + 1)

    $("#captcha").val(captcha)
    $("#submit").click(function(e){
        e.preventDefault();
        if($("#register").val()==null)
        {
            $("#registerAs").css("color","red")
        }
        // email Validation
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        let email=$("[name=email]").val();
        if(!pattern.test(email))
        {
            $("#labelEmail").css("color","red")

            $("#errorEmail").css("visibility","visible")
            $("[name=email]").val('');
        }
        if($("[name=password]").val().length<8)
        {
            $("#labelPassword").css("color","red")
            $("#errorPassword").css("visibility","visible")
        }
        if($("[name=confirmPassword]").val().length<8||($("[name=confirmPassword]").val()!='')&&$("[name=password]").val()=='')
        {
            $("#labelConfirmPassword").css("color","red")
            $("[name=confirmPassword]").val('')
        }
        if($("[name=password]").val()!=$("[name=confirmPassword]").val())
        {
                     $("#labelPassword").css("color","red")
            $("#errorPassword").css("visibility","visible") 
            $("#labelConfirmPassword").css("color","red")
            $("[name=confirmPassword]").val('')
            $("[name=password]").val('')
        }
        if($("[name=firstName]").val()=='')
        {
            $("[name=middleName]").val('')
            $("[name=lastName]").val('')
            $("#labelName").css("color","red")
            $("#errorName").css("visibility","visible")
        }
        //gender validation
        if($('#gender').val()!='male'&&$('#gender').val()!='female'){
            $("#labelGender").css("color","red")
            $("#errorGender").css("visibility","visible")
        }
        //mobile no validation
        var phoneno = /^\d{10}$/;
        var phonenoValue=$("[name=mobileNumber]").val()
        if(!phoneno.test(phonenoValue))
        {
            $("#labelMobile").css("color","red")
            $("#errorMobile").css("visibility","visible") 
            $("[name=mobileNumber]").val('')
        }
        //captcha validation
        if($("[name=code]").val()!=captcha)
        {
            $("#labelCaptcha").css("color","red")
            $("[name=code]").val('')
            $("#errorCaptcha").css("visibility","visible")
        }
            if($('input[type="checkbox"]'). prop("checked") != true){
                $('input[type="checkbox"]').css("outline-color","rgba(247, 4, 4, 0.5)")
            }
    })
    

})

