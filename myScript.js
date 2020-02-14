/*Animate landing view on page load*/
$(function() {
    $('.lander-header').delay(150).animate({ top: '50%', opacity: '1' });
    $('.hoverMe').delay(600).animate({ top: '18vh', opacity: '1' })
});

/*animate ball infinitely*/
$(function(){
    animateBall()
})

function animateBall() {
    $('hoverMe-ball').delay(500).animate({ width: '80px', height: '80px'})
}

/*animate hoverme-ball on hover*/
$(function(){
    $(".hoverMe-area").hover(
        function(){
            $(".hoverMe-ball").animate({height: "40px", width: "40px"}, 300);
            
            /*Animate lander-init, lander-header to disappear and make profile picture to appear on hover*/
            $('.lander-init').css("opacity", "0");
            $('.lander-header-container').css("opacity", "0")
        },

        function(){
            $(".hoverMe-ball").animate({height: "120px", width: "120px"}, 300);

            $('.lander-init').delay(150).css("opacity", "1");
            $('.lander-header-container').delay(150).css("opacity", "1")
        }
    );
});


//Typewriting effect on profile-text
var str = "You found the culprit!       <br><span style='color:#F0A171; font-weight: bold;'>I am Ben.</span>",
    i = 0,
    isTag,
    text;

function type() {
    text = str.slice(0, ++i);
    if (text === str) return;
    
    document.getElementById('txtHeader').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 50);
};

//Animate my profilepic into the view and typewriter effext on texts
$(function(){
    $(".hoverMe-area").mouseenter(
        function(){ 
            $('.profile-pic').delay(150).animate({opacity: '1', left: '48%'}, 300),
            setTimeout(() => {type()}, 800),
            $('#txtParaph').delay(3000).animate({opacity: '1', top: '0'}, 600)
        }
    )
})


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
           $('.overlayModal').fadeIn(300);
           $(`#content-img-${e.target.id.substring(e.target.id.length-1)}`).delay(250).fadeIn();
        }
    );

    $('.overlayModal').click(
        function(e) {
            $('.overlayModal').fadeOut();
            $('.contentModal').fadeOut();
        }
    )
});

