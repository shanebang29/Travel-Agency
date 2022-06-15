//$(function(){
    $('.next').click(function(event){
        var sau = $('.active').next(); 
        var truoc = $('.active').prev();
        var truoc2 = $('.active').prevAll();
        $('.active').addClass('move-to-left');
        truoc.addClass('move-to-left').one('webkitAnimationEnd', function(event){
            
        });
        sau.addClass('move-from-right').one('webkitAnimationEnd', function(event){
            // remove active
            $('.active').removeClass('active');
            $('.move-from-right').addClass('active');
            truoc.removeClass('move-from-right').removeClass('active');
        });
        
    });
});