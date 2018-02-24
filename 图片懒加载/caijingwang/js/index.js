/**
 * Created by Personal on 2017/8/15.
 */
(function(){
    jPicture("#imgBox", {
        type: "slide",
        autoplay: 5000
    });
    $(function() {
        $("img").lazyload({   //可以在img位置指定要实现本效果的页面区域，
            effect : "fadeIn", //实现图像淡入效果
            failurelimit : 2000 //因页面的框架结构可能不规则，此处建议添加强制加载的图片数，保证图片能正常加载。
        });
    });

})();
