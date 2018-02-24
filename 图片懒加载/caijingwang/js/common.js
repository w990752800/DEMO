/**
 * Created by Personal on 2017/8/15.
 */
(function(){
    $('.header .header_r input').focus(function(){
        $('.header .header_r').css('border-color','#58B4B1');
    });
    $('.header .header_r input').blur(function(){
        $('.header .header_r').css('border-color','#cdcdcd');
    });
})();