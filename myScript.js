/*Animate landing view on page load*/
$(function() {
    $('.lander-header').delay(150).animate({ top: '50%', opacity: '1' });
    $('.hoverMe').delay(600).animate({ top: '16vh', opacity: '1' })
});

/*bending the hover over me text*/
const circleType = new CircleType(document.getElementById('hoverOverMe'));
circleType.radius(98).dir(-1);


/*animate hoverme-ball on hover*/
$(function(){
    $(".hoverMe-area").hover(
        function(){
            $(".hoverMe-ball").animate({height: "40px", width: "40px"}, 300);
            $('#hoverOverMe').animate({opacity: "0", top: "20px"}, 100);
            
            /*Animate lander-init, lander-header to disappear and make profile picture to appear on hover*/
            $('.lander-init').css("background-color", "#ffffff");
            $('.lander-header-container').css("opacity", "0")
        },

        function(){
            $(".hoverMe-ball").animate({height: "120px", width: "120px"}, 300);
            $('#hoverOverMe').animate({opacity: "1", top: "0"}, 300);

            $('.lander-init').delay(150).css("background-color", "#F0E5CE");
            $('.lander-header-container').delay(150).css("opacity", "1")
        }
    );
});

/*smooth scrolling effect on anchor tags */
$(document).ready(function() {

    var scrollLink = $('.scroll')

    //smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        })
    })

})

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

/*Image modal function*/
$(function(){
    $(".triggerModal").click(
        function(e) {
            console.log(e.target.id.substring(e.target.id.length-1))
           $('.overlayModal').fadeIn();
           $(`#content-img-${e.target.id.substring(e.target.id.length-1)}`).fadeIn();
        }
    );

    $('.overlayModal').click(
        function(e) {
            $('.overlayModal').fadeOut();
            $('.contentModal').fadeOut();
        }
    )
});

