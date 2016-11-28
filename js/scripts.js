$(document).ready(function(){
    
    SocialShareKit.init();
    
    
    var link = $(location).attr('hash');
    if(link=='#recommend_1'){
        $.fancybox.close();
        $.fancybox.open('#myModal',{
            closeBtn    : false,
            padding     :  0,
            scrolling   : 'auto',
        });
    }
    if(link=='#recommend_2'){
        $.fancybox.close();
        $.fancybox.open('#myModal2',{
            closeBtn    : false,
            padding     :  0,
            scrolling   : 'auto',
        });
    }
    if(link=='#recommend_3'){
        $.fancybox.close();
        $.fancybox.open('#myModal3',{
            closeBtn    : false,
            padding     :  0,
            scrolling   : 'auto',
        });
    }
    if(link=='#recommend_4'){
        $.fancybox.close();
        $.fancybox.open('#myModal4',{
            closeBtn    : false,
            padding     :  0,
            scrolling   : 'auto',
        });
    }else{
       $.fancybox.close(); 
    }
    
    
    $(".fancybox").fancybox({
        padding     :  0,
        closeBtn    : false,
        scrolling   : 'visible',
        fitToView   : true,
        beforeShow: function() {
            console.log(1);  
            //$.fancybox.close();
        }
	});
    $('.close').on('click', function() {
        $.fancybox.close();
    });
    
    
    $('a.modal1').on('click', function() {
        $.fancybox.close();
        $.fancybox.open('#myModal',{
            closeBtn    : false,
            padding     :  0,
            scrolling   : 'auto',
        });
    });
    $('a.modal2').on('click', function() {
        $.fancybox.close();
        $.fancybox.open('#myModal2',{
            closeBtn    : false,
            padding     :  0,
            scrolling   : 'auto',
        });
    });
    $('a.modal3').on('click', function() {
        $.fancybox.close();
        $.fancybox.open('#myModal3',{
            closeBtn    : false,
            padding     :  0,
            scrolling   : 'auto',
        });
    });
    $('a.modal4').on('click', function() {
        $.fancybox.close();
        $.fancybox.open('#myModal4',{
            closeBtn    : false,
            padding     :  0,
            scrolling   : 'auto',
        });
    });
    
    
    $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

var scrollFloat = function() {
    'use strict';

    var app = {};

    app.init = function init(node) {
        if (!node || node.nodeType !== 1) {
            throw new Error(node + ' is not DOM element');
        }
        handleWindowScroll(node);
    };

    function handleWindowScroll(floatElement) {
        window.onscroll = function() {
            if (window.scrollY > floatElement.offsetTop) {
                if (floatElement.style.position !== 'fixed') {
                    $('#line_3').addClass("fixed");
                    floatElement.style.position = 'fixed';
                }
            } else {
                if (floatElement.style.position === 'fixed') {
                    floatElement.style.position = '';
                    $('#line_3').removeClass("fixed");
                }
            }
        };
    }

    return app;
}();

var el = document.getElementById('line_3');
scrollFloat.init(el);

});