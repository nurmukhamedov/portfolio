$(function() {

    $('.menu_btn').click(function() {
        $('.menu_ul').toggleClass('active');
    })
    $(window).resize(function() {
        if ($(window).width() < 992) {
            $('.menu_ul').removeClass('active');
        }
    });
    if ($('.typed').length) {
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
    $('.project_number').counterUp({
        delay: 10,
        time: 3000
    });
    $('.skills-content').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });
    AOS.init();
})
const particlesSlider = {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "color": {
            "value": "#8358e8"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#f2f2f2"
            },
            "polygon": {
                "nb_sides": 4
            },
            "image": {
                "src": "none",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.2884338044418808,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 8.01205012338558,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 528.7953081434482,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 11.537352177675233
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "bottom-right",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 1041.5665160401252,
                "rotateY": 2403.615037015674
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

particlesJS('particles', particlesSlider);




$(function() {
    $('.small a').click(function(even) {
        even.preventDefault();
        let href = $(this);
        $('.big img, .pick img').fadeOut(1000, function() {
            $(this).attr('src', href.attr('href')).fadeIn(1000)
        });

    })
    $('.pop_img').hide();

    $('.big img').dblclick(function() {
        $('.pop_img').fadeIn(500);
    })

    $('.pop_img').dblclick(function() {
        $('.pop_img').fadeOut(500);
    })
})

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        auto: true,
        pauseOnHover: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
    var autoplaySlider = $('#autoplay').lightSlider({
        onBeforeSlide: function(el) {
            $('#current').text(el.getCurrentSlideCount());
        }
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());

});


const navSlide = () => {
    const navLinks = document.querySelectorAll('.nav_links li');
    const menuBtn = document.querySelector('.menu_btn');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
    });
    menuBtn.classList.toggle('toggle');
}
navSlide();

$(function() {


    $('.top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 2000);
    })

    let link = $('.menu_ul li a');

    link.on('click', function(e) {
        e.preventDefault();

        link.removeClass('active');
        let selector = $(this).addClass('active').attr('href');
        let target = $(selector);

        $('html, body').animate({ scrollTop: target.offset().top - 120 }, 500);
    })

    $(window).scroll(function() {

        let scroll = $(window).scrollTop();

        link.each(function() {

            let selector = $(this).attr('href');
            let target = $(selector);

            if (scroll >= target.offset().top - 200) {
                link.removeClass('active');
                $(this).addClass('active');

            }
        })
    })

})
$(function() {


    $('.top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 2000);
    })

    let link = $('.footer_menu li a');

    link.on('click', function(e) {
        e.preventDefault();

        link.removeClass('active');
        let selector = $(this).addClass('active').attr('href');
        let target = $(selector);

        $('html, body').animate({ scrollTop: target.offset().top - 120 }, 500);
    })

    $(window).scroll(function() {

        let scroll = $(window).scrollTop();

        link.each(function() {

            let selector = $(this).attr('href');
            let target = $(selector);

            if (scroll >= target.offset().top - 200) {
                link.removeClass('active');
                $(this).addClass('active');

            }
        })
    })

})


$('body').append('<div id="loadingDiv"><div class="loader">Loading...</div></div>');
$(window).on('load', function() {
    setTimeout(removeLoader, 500);
});

function removeLoader() {
    $('#loadingDiv').fadeOut(500, function() {
        $('#loadingDiv').remove();
    })
}