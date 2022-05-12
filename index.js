// fede in
$(function() {
    $(window).on('load scroll', function (){

        var box = $('.works_list_item');
        var fadeIn = 'fadeIn';
        
        box.each(function(){
        
            var boxOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();
        
            //画面内のどの位置で処理を実行するかで「100」の値を変更
            if(scrollPos > boxOffset - wh + 100 ){
                $(this).addClass(fadeIn);
            }
        });
        
    });
});