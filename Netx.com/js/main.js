$(document).ready(function(){

// Slideshows
$("#recent").owlCarousel({
    loop:true,
    margin:1,
    nav:false,
    responsive:{
        0:{
            items:3.5
        },
        600:{
            items:4.5
        },
        1000:{
            items:5.5
        }
    }
});

$("#discover").owlCarousel({
    loop:true,
    margin:1,
    nav:false,
    responsive:{
        0:{
            items:4.5
        },
        600:{
            items:5.5
        },
        1000:{
            items:6.5
        }
    }
});

$("#popular").owlCarousel({
    loop:true,
    margin:1,
    nav:false,
    responsive:{
        0:{
            items:3.5
        },
        600:{
            items:4.5
        },
        1000:{
            items:5.5
        }
    }
});

$("#yor").owlCarousel({
    items: 5,
    loop:true,
    margin:1,
    nav:false,
    responsive:{
        0:{
            items:1.5
        },
        600:{
            items:2.5
        },
        1000:{
            items:2.5
        }
    }
});

$("#discover-content-movies").owlCarousel({
    items: 5,
    loop:true,
    margin:1,
    nav:false,
    responsive:{
        0:{
            items:2.5
        },
        600:{
            items:3.5
        },
        1000:{
            items:3.5
        }
    }
});

$("#discover-content-tvshows").owlCarousel({
    items: 5,
    loop:true,
    margin:1,
    nav:false,
    responsive:{
        0:{
            items:2.5
        },
        600:{
            items:3.5
        },
        1000:{
            items:3.5
        }
    }
});



//Slideshows end

// isotope filter
var $grid = $(".grid").isotope({
    itemSelector : '.grid-item',
    layoutMode : 'fitRows'
});
    
// filter items on button click
$(".button-group").on("click", "button", function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue});
})
//isotope filter ENd    
    


//Welcome Page scroll effect
    (function ($) {
        "use strict"; // Start of use strict
        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (
                location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top - 70,
                        },
                        1000,
                        "easeInOutExpo"
                    );
                    return false;
                }
            }
        });
    
        // Closes responsive menu when a scroll trigger link is clicked
        $(".js-scroll-trigger").click(function () {
            $(".navbar-collapse").collapse("hide");
        });
    
        // Activate scrollspy to add active class to navbar items on scroll
        $("body").scrollspy({
            target: "#mainNav",
            offset: 100,
        });
    
        // Collapse Navbar
        var navbarCollapse = function () {
            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");
            } else {
                $("#mainNav").removeClass("navbar-shrink");
            }
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);

    })(jQuery); // End of use strict
    //ENd of welcome scroll effect

});