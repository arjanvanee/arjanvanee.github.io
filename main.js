$(document).on("scroll", function () {

    var pixels = $(document).scrollTop()
    
    $("div.plx1").css("top", pixels * -0.05)
    $("div.plx2").css("top", pixels * -0.10)
    $("div.plx3").css("top", pixels * -0.25)
    $("div.plx4").css("top", pixels * -0.50)
    $("div.plxtitle").css("top", pixels * -0.65)
    $("div.plx5").css("top", pixels * -0.70)
    
    $("div.square>img").css("top", pixels * 0.20)
    $("div.triangle>img").css("top", pixels * -0.60)
    })

    window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);

    jQuery(document).ready(function ($) {
    setTimeout(function(){ 
    
    ScrollTrigger.refresh(true);
        
    $(document).ready(function(){
    $('.gallery').isotope({
    itemSelector:'.item',
    stagger: 30,
    masonry: {
    isFitWidth: true,
    gutter: 20
    }
    });
    
    $('.filter-button-group').on( 'click', 'li', function() {
    ScrollTrigger.refresh(true);
    var filterValue = $(this).attr('data-filter');
    $('.gallery').isotope({ filter: filterValue });
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
    });
    })
    }, 400);
    });