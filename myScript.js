/*Animate landing view on page load*/
$(function() {
    $('.lander-header').delay(150).animate({ top: '50%', opacity: '1' }, 600);
    $('.hoverMe-ball').delay(800).animate({ width: '135px', height: '135px', opacity: '1'}, 300).animate({ width: '120px', height: '120px'}, 300)
});


/*animate hoverme-ball on hover*/
$(function(){
    $(".hoverMe-area").hover(
        function(){
            $(".hoverMe-ball").animate({height: "40px", width: "40px"}, 300);
            $(".hoverMe-ball").css("animation", "none");
            
            /*Animate lander-init, lander-header to disappear and make profile picture to appear on hover*/
            $('.lander-init').css("opacity", "0");
            $('.lander-header-container').css("opacity", "0")
        },

        function(){
            $(".hoverMe-ball").animate({height: "120px", width: "120px"}, 300);
            $(".hoverMe-ball").delay(800).css("animation", "pulse 1400ms infinite");

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


//Animate my profile_pic into the view and typewriter effext on texts
$(function(){
    $(".hoverMe-area").mouseenter(
        function(){ 
            $('.profile-pic').delay(150).animate({opacity: '1', left: '48%'}, 300),
            setTimeout(() => {type()}, 800),
            $('#txtParaph').delay(3000).animate({opacity: '1', top: '0'}, 600)
        }
    )
})


//Pagination functionality
const landerContainer = document.querySelector('.lander-container');
const mySkills = document.querySelector('.mySkills');
const showcaseContainer = document.querySelector('.showcase-container');
const projectsContainer = document.querySelector('.projectsContainer');
const testimonials = document.querySelector('.testimonials');
const footer = document.querySelector('.footer')

window.addEventListener('scroll', function() {
    const indexBar = document.querySelector('.index-bar1');
    const indexNro = document.querySelector('.index-nro1');

    if ( landerContainer.getBoundingClientRect().top <= 0 && landerContainer.getBoundingClientRect().bottom >= 0) {
        indexBar.style.width = '22px';
        indexNro.style.opacity = '1';

    } else if (landerContainer.getBoundingClientRect().bottom <= 0) {
        indexBar.style.width = '10px';
        indexNro.style.opacity = '0';
    }
})

window.addEventListener('scroll', function() {
    const indexBar = document.querySelector('.index-bar2');
    const indexNro = document.querySelector('.index-nro2');

    if ( mySkills.getBoundingClientRect().top <= 0 && mySkills.getBoundingClientRect().bottom >= 0) {
        indexBar.style.width = '22px';
        indexNro.style.opacity = '1';

    } else if (mySkills.getBoundingClientRect().bottom <= 0 || mySkills.getBoundingClientRect().top >= 0) {
        indexBar.style.width = '10px';
        indexNro.style.opacity = '0';
    }
})

window.addEventListener('scroll', function() {
    const indexBar = document.querySelector('.index-bar3');
    const indexNro = document.querySelector('.index-nro3');

    if ( showcaseContainer.getBoundingClientRect().top <= 0 && showcaseContainer.getBoundingClientRect().bottom >= 0) {
        indexBar.style.width = '22px';
        indexNro.style.opacity = '1';

    } else if (showcaseContainer.getBoundingClientRect().bottom <= 0 || showcaseContainer.getBoundingClientRect().top >= 0) {
        indexBar.style.width = '10px';
        indexNro.style.opacity = '0';
    }
})

window.addEventListener('scroll', function() {
    const indexBar = document.querySelector('.index-bar4');
    const indexNro = document.querySelector('.index-nro4');

    if ( projectsContainer.getBoundingClientRect().top <= 0 && projectsContainer.getBoundingClientRect().bottom >= 0) {
        indexBar.style.width = '22px';
        indexNro.style.opacity = '1';

    } else if (projectsContainer.getBoundingClientRect().bottom <= 0 || projectsContainer.getBoundingClientRect().top >= 0) {
        indexBar.style.width = '10px';
        indexNro.style.opacity = '0';
    }
})

window.addEventListener('scroll', function() {
    const indexBar = document.querySelector('.index-bar5');
    const indexNro = document.querySelector('.index-nro5');

    if ( testimonials.getBoundingClientRect().top <= 0 && testimonials.getBoundingClientRect().bottom >= window.innerHeight) {
        indexBar.style.width = '22px';
        indexNro.style.opacity = '1';

    } else if (testimonials.getBoundingClientRect().bottom <= window.innerHeight || testimonials.getBoundingClientRect().top >= 0) {
        indexBar.style.width = '10px';
        indexNro.style.opacity = '0';
    } 
})

window.addEventListener('scroll', function() {
    const indexBar = document.querySelector('.index-bar6');
    const indexNro = document.querySelector('.index-nro6');

    if ( footer.getBoundingClientRect().top <= window.innerHeight) {
        indexBar.style.width = '22px';
        indexNro.style.opacity = '1';

    } else if (footer.getBoundingClientRect().top >= window.innerHeight) {
        indexBar.style.width = '10px';
        indexNro.style.opacity = '0';
    } 
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

