/*bending the hover over me text*/
const circleType = new CircleType(document.getElementById('hoverOverMe'));
circleType.radius(98).dir(-1);

/*inertial scrolling*/


/*animate hoverme-ball on hover*/
$(document).ready(function(){
    $(".hoverMe-area").hover(
        function(){
        $(".hoverMe-ball").animate({height: "40px", width: "40px"}, 300);
        $('#hoverOverMe').animate({opacity: "0", top: "20px"}, 100);
        },
        function(){
        $(".hoverMe-ball").animate({height: "120px", width: "120px"}, 300);
        $('#hoverOverMe').animate({opacity: "1", top: "-12px"}, 300);
        }
    );
});

/*Nav fade in on Y position*/
$(document).scroll(function() {
    var y = $(this).scrollTop();
    var navPosY = $('.nav-static').position();

    if (y > navPosY.top) {
        $('.nav-static').fadeOut(0);
        $('.nav-fixed').fadeIn(0);
    } else {
        $('.nav-static').fadeIn();
        $('.nav-fixed').fadeOut();
    }
});
