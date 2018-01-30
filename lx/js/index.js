$(function () {
    let a = $('.a');
    let b = $('.b');
    let c = $('.c');
    let circle = $("div[class*='circle']")
    a.animate({ bottom: 1.8 + 'rem' }, 1000);
    b.delay(60).animate({ bottom: 1 + 'rem' }, 1000);
    c.delay(120).animate({ bottom: 0 + 'rem' }, 1000);
    $('.title').delay(130).animate({ bottom: 5.5 + 'rem' }, 1000);
    $('.star1').delay(130).animate({ bottom: -1.1 + 'rem' }, 1000);
    $('.star2').delay(130).animate({ bottom: -1.3 + 'rem' }, 1200);
    $('.star3').delay(130).animate({ bottom: -1.5 + 'rem' }, 1400);
    circle.delay(140).animate({   opacity: 1 }, 2000);
    setInterval(fn,3000)
    function fn() {
        for(let i=1;i<5;i++){
            let rights = -Math.random()*4-4
            let tops = -Math.random()*2-4
            let img = $('<img>').attr('src',`img/l${i}.png`)
            let divs = $('<div>').addClass('yu').css({position:'absolute',top:tops+'rem',right:rights+'rem'}).append(img).delay(200*i).animate({right:'100%',top:'100%'},4000).queue(function () {
             $(this).remove();
            })
            divs.appendTo($('body'))
        }
    }
    let flag =true;

    let audio = document.querySelector('audio');
    audio.autoplay=true;
    audio.looper=true;

    var startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };

    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;

        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }

        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }

        return result;
    }
    //手指接触屏幕
    var all = $('section');
    var index;
    var next,next1;
    document.addEventListener("touchstart", function(e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
        for(var i=0;i<all.length;i++){
            if($(all[i]).hasClass('active')){
                index=i;
            }
        }
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", function(e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                break;
            case 1:
                next=index+1;
                if(next>=all.length){
                    next=index;
                }
                if(next==index){
                    return;
                }
               /* $(all[index]).css('transform','translateY(-100%)');*/
               $(all[index]).css({opacity:0})
                $(all[index]).removeClass('active')
                $(all[next]).addClass('active')
                if($('.first.active').length){
                    $('.first').css("opacity",1)
                }else{
                    $('.first').css("opacity",0)
                }
                if($('.second.active').length){
                    $('.second').css({opacity: 1,transform:'translateY(-100%)'})
                    $('.bottom').css({opacity: 1})
                    $('.content>img').css({transform:'scale(1)'})
                    $('.name').animate({left:0},1000)
                    $('.p').delay(500).animate({left:0},1000)
                }else{
                    $('.second').css({opacity: 0,transform:'translateY(-200%)'})
                    $('.bottom').css({opacity: 0})
                    $('.content>img').css({transform:'scale(0)'})
                    $('.name').animate({left:'-100%'},1000)
                    $('.p').animate({left:'-200%'},1000)
                }
                if($('.third.active').length){
                    $('.third').css({opacity: 1,transform:'translateY(-200%)'})
                    $('.page1').css({opacity:1})
                    $('.img1').css({opacity:1,transform:'translateX(5%)'})
                    $('.img2').css({opacity:1,transform:'translateX(20%)'})
                    $('.bottom1').css({opacity: 1})
                }else{
                    $('.page1').css({opacity:0})
                    $('.img1').css({opacity:0,transform:'translateX(-100%)'})
                    $('.img2').css({opacity:0,transform:'translateX(100%)'})
                    $('.third').css({opacity:0,transform:'translateY(-300%)'})
                    $('.bottom1').css({opacity: 0})
                }
                if($('.four.active').length){
                    $('.four').css({opacity: 1,transform:'translateY(-300%)'})
                    $('.page2').css({opacity:1})
                    $('.img4').css({opacity:1,transform:'translateX(5%)'})
                    $('.img3').css({opacity:1,transform:'translateX(20%)'})
                    $('.bottom2').css({opacity: 1})
                }else{
                    $('.page2').css({opacity:0})
                    $('.img4').css({opacity:0,transform:'translateX(-100%)'})
                    $('.img3').css({opacity:0,transform:'translateX(100%)'})
                    $('.four').css({opacity:0,transform:'translateY(-400%)'})
                    $('.bottom2').css({opacity: 0})
                }
                if($('.five.active').length){
                    $('.five').css({opacity: 1,transform:'translateY(-400%)'})
                    $('.page3').css({opacity:1})
                    $('.img5').css({opacity:1,transform:'translateX(5%)'})
                    $('.img6').css({opacity:1,transform:'translateX(20%)'})
                    $('.bottom3').css({opacity: 1})
                }else{
                    $('.page3').css({opacity:0})
                    $('.img5').css({opacity:0,transform:'translateX(-100%)'})
                    $('.img6').css({opacity:0,transform:'translateX(100%)'})
                    $('.five').css({opacity:0,transform:'translateY(-500%)'})
                    $('.bottom3').css({opacity: 0})
                }
                break;
            case 2:
                next1=index-1;
                if(next<0){
                    next1=index;
                }
                if(index==0){
                    return;
                }
                $(all[index]).css({opacity:0})
                $(all[index]).removeClass('active')
                $(all[next1]).addClass('active')
                if($('.first.active').length){
                    $('.first').css("opacity",1)
                }else{
                    $('.first').css("opacity",0)
                }
                if($('.second.active').length){
                    $('.second').css({opacity: 1,transform:'translateY(-100%)'})
                    $('.bottom').css({opacity: 1})
                    $('.content>img').css({transform:'scale(1)'})
                    $('.name').animate({left:0},1000)
                    $('.p').delay(500).animate({left:0},1000)
                }else{
                    $('.second').css({opacity: 0,transform:'translateY(0)'})
                    $('.bottom').css({opacity: 0})
                    $('.content>img').css({transform:'scale(0)'})
                    $('.name').animate({left:'-100%'},1000)
                    $('.p').animate({left:'-200%'},1000)
                }
                if($('.third.active').length){
                    $('.third').css({opacity: 1,transform:'translateY(-200%)'})
                    $('.img1').css({opacity:1,transform:'translateX(5%)'})
                    $('.img2').css({opacity:1,transform:'translateX(20%)'})
                    $('.bottom1').css({opacity: 1})
                    $('.page1').css({opacity:1})
                }else{
                    $('.img1').css({opacity:0,transform:'translateX(-100%)'})
                    $('.img2').css({opacity:0,transform:'translateX(100%)'})
                    $('.third').css({opacity:0,transform:'translateY(0)'})
                    $('.bottom1').css({opacity: 0})
                    $('.page1').css({opacity:0})
                }
                if($('.four.active').length){
                    $('.four').css({opacity: 1,transform:'translateY(-300%)'})
                    $('.page2').css({opacity:1})
                    $('.img4').css({opacity:1,transform:'translateX(5%)'})
                    $('.img3').css({opacity:1,transform:'translateX(20%)'})
                    $('.bottom2').css({opacity: 1})
                }else{
                    $('.page2').css({opacity:0})
                    $('.img4').css({opacity:0,transform:'translateX(-100%)'})
                    $('.img3').css({opacity:0,transform:'translateX(100%)'})
                    $('.four').css({opacity:0})
                    $('.bottom2').css({opacity: 0})
                }
                if($('.five.active').length){
                    $('.five').css({opacity: 1,transform:'translateY(-400%)'})
                    $('.page3').css({opacity:1})
                    $('.img5').css({opacity:1,transform:'translateX(5%)'})
                    $('.img6').css({opacity:1,transform:'translateX(20%)'})
                    $('.bottom3').css({opacity: 1})
                }else{
                    $('.page3').css({opacity:0})
                    $('.img5').css({opacity:0,transform:'translateX(-100%)'})
                    $('.img6').css({opacity:0,transform:'translateX(100%)'})
                    $('.five').css({opacity:0})
                    $('.bottom3').css({opacity: 0})
                }
                break;
            default:
        }
    }, false);
})
