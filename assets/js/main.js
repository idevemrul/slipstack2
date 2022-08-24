const video = document.getElementById("video01");

function playPause() {
    if (video.paused) video.play();
    else video.pause();
}




(function ($) {
    "use strict";

    //----------- Preloader
    $(window).on('load', function () { // makes sure the whole site is loaded
        $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
        $('#preloader').fadeOut(); // will fade out the white DIV that covers the website.
    });

    // Scroll Menu. 
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 120) {
            $("header.enpix-header").addClass("scrolled");
        } else {
            $("header.enpix-header").removeClass("scrolled");
        }
    });

    // Toggle class for header search form.
    if ($('button.header-search-button').length > 0) {
        $('button.header-search-button').click(function () {
            $('.header-search-form').addClass('visible')
        })
        $('.header-search-form button.form-close').click(function () {
            $('.header-search-form').removeClass('visible')
        })
    }

    // Toggle class for header side infobar. 
    if ($('button.side-opener').length > 0) {
        $('button.side-opener').click(function () {
            $('.header-side-info-container').addClass('expanded')
        })
        $('button.header-side-info-close').click(function () {
            $('.header-side-info-container').removeClass('expanded')
        })
    }

    // Initialize Isotope.
    $(document).ready(function () {
        var $grid = $('.enpix-posts-grid')
        $grid.length > 0 && $grid.isotope({
            itemSelector: '.enpix-post-item',
            layoutMode: 'fitRows',
            fitRows: {
                gutter: 50
            }
        });
        // filter items on button click
        var filterButtons = $('.filter-buttons')
        filterButtons.length > 0 && filterButtons.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.length && $grid.isotope({
                filter: filterValue
            });
            return false;
        });
        // change is-checked class on buttons
        filterButtons.length > 0 && filterButtons.each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.selected').removeClass('selected');
                $(this).addClass('selected');
            });
        });
    })
    // Isotope setup ends.

    // Initialize isotope for portfolio.
    $(document).ready(function () {
        var portfolioGrid = $(".enpix-portfolio-grid")
        portfolioGrid.length > 0 && portfolioGrid.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'masonry',
            masonry: {
                gutter: 50
            }
        });
        // filter items on button click
        var portfolioFilterButtons = $('.portfolio-filter-buttons')
        portfolioFilterButtons.length > 0 && portfolioFilterButtons.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            portfolioGrid.isotope({
                filter: filterValue
            });
            return false;
        });
        // change is-checked class on buttons
        portfolioFilterButtons.length > 0 && portfolioFilterButtons.each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.selected').removeClass('selected');
                $(this).addClass('selected');
            });
        });
    })
    // Isotope setup for portfolio ends.

    // Initialize isotope for works section in index-3.html.
    $(document).ready(function () {
        var worksGrid = $(".work-box-container")
        worksGrid.length > 0 && worksGrid.isotope({
            itemSelector: '.work-box',
            layoutMode: 'fitRows',
            fitRows: {
                gutter: 50
            }
        });
        // filter items on button click
        var worksFilterButtons = $('.works-filter-buttons')
        worksFilterButtons.length > 0 && worksFilterButtons.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            worksGrid.isotope({
                filter: filterValue
            });
            return false;
        });
        // change is-checked class on buttons
        worksFilterButtons.length > 0 && worksFilterButtons.each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.selected').removeClass('selected');
                $(this).addClass('selected');
            });
        });
    })

    // Isotope setup for works section in index-3.html ends.

    // Counterup Initialize.
    var counter = $('.counter')
    counter.length > 0 && counter.appear(function () {
        counter.countTo({
            speed: 500,
            refreshInterval: 1,
        })
    })

    var projectsCount = $('.projects-count')
    projectsCount.length > 0 && projectsCount.appear(function () {
        projectsCount.countTo({
            speed: 500,
            refreshInterval: 1,
        })
    })

    // Video Popup.
    var popupVideo = $("a.popup-video")

    popupVideo.length > 0 && popupVideo.yu2fvl({
        ratio: 4 / 3,
        cssClass: "speciality-video-container"
    });


})(jQuery);

// Responsive Menu
document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector('#menu'),
            "(max-width: 1199px)"
        );

        const navigator = menu.navigation({
            'title': 'Main Menu',
            'theme': 'light'
        });

        const drawer = menu.offcanvas();

        document.querySelector("a[href='#menu']").addEventListener("click", (evnt) => {
            evnt.preventDefault();
            drawer.open();
        });
    }
);

// Initialize Banner Slider.
var bannerSlider = document.querySelectorAll('#bannerslider')

if (bannerSlider.length > 0) {
    new Splide('#bannerslider', {
        rewind: true,
        type: 'fade',
        speed: 1500,
        pagination: false,
    }).mount();
}

// Initialize Banner Slider.
var bannerSlider2 = document.querySelectorAll('#bannerslider2')

if (bannerSlider2.length > 0) {
    new Splide('#bannerslider2', {
        rewind: true,
        type: 'fade',
        speed: 1500,
        pagination: false,
    }).mount();
}

// Initialize Banner Slider.
var bannerSlider3 = document.querySelectorAll('#bannerslider3')

if (bannerSlider3.length > 0) {
    new Splide('#bannerslider3', {
        rewind: true,
        type: 'fade',
        speed: 1500,
        pagination: false,
    }).mount();
}

// Initialize Banner Slider.
var bannerSlider4 = document.querySelectorAll('#bannerslider4')

if (bannerSlider4.length > 0) {
    new Splide('#bannerslider4', {
        rewind: true,
        type: 'fade',
        speed: 1500,
        pagination: false,
    }).mount();
}

// Initialize Companies Logo Slider.
var companiesLogo = document.querySelectorAll('#companieslogo')

if (companiesLogo.length > 0) {
    new Splide('#companieslogo', {
        rewind: true,
        type: 'loop',
        speed: 400,
        pagination: false,
        arrows: false,
        perPage: 5,
        autoplay: true,
        interval: 3000,
        perMove: 1,
        breakpoints: {
            991: {
                perPage: 4
            },
            767: {
                perPage: 3
            },
            575: {
                perPage: 2
            },
            425: {
                perPage: 1
            },
        }
    }).mount();
}

var companiesLogoAbout = document.querySelectorAll('#companieslogoAbout')

if (companiesLogoAbout.length > 0) {
    new Splide('#companieslogoAbout', {
        rewind: true,
        type: 'loop',
        speed: 400,
        pagination: false,
        arrows: false,
        perPage: 5,
        autoplay: false,
        interval: 3000,
        perMove: 1,
        breakpoints: {
            991: {
                perPage: 4
            },
            767: {
                perPage: 3
            },
            575: {
                perPage: 2
            },
            425: {
                perPage: 1
            },
        }
    }).mount();
}

// Initialize Review Slider.
var reviewSlider = document.querySelectorAll('#reviewSlider')

if (reviewSlider.length > 0) {
    new Splide('#reviewSlider', {
        rewind: true,
        type: 'loop',
        speed: 600,
        pagination: false,
    }).mount();
}

// Initialize Review Slider for Home 3.
var reviewSlider3 = document.querySelectorAll('#reviewSlider3')

if (reviewSlider3.length > 0) {
    new Splide('#reviewSlider3', {
        rewind: true,
        type: 'loop',
        speed: 600,
        arrows: false,
        perPage: 2,
        classes: {
            pagination: 'splide__pagination review-3-pagination',
            page: 'splide__pagination__page review-3-pagination-page',
        },
        gap: '50px',
        breakpoints: {
            991: {
                perPage: 1
            },
        }
    }).mount();
}

// Initialize Review Slider for Home 3.
var reviewSlider4 = document.querySelectorAll('#reviewSlider4')

if (reviewSlider4.length > 0) {
    new Splide('#reviewSlider4', {
        rewind: true,
        type: 'loop',
        speed: 600,
        arrows: false,
        perPage: 2,
        classes: {
            pagination: 'splide__pagination review-3-pagination',
            page: 'splide__pagination__page review-3-pagination-page',
        },
        gap: '50px',
        breakpoints: {
            991: {
                perPage: 1
            },
        }
    }).mount();
}


// Initialize Brand Logo Slider.
var companiesLogo = document.querySelectorAll('#brandlogo')

if (companiesLogo.length > 0) {
    new Splide('#brandlogo', {
        rewind: true,
        type: 'loop',
        speed: 400,
        pagination: false,
        arrows: true,
        perPage: 6,
        autoplay: true,
        interval: 3000,
        perMove: 1,
        breakpoints: {
            991: {
                perPage: 4
            },
            767: {
                perPage: 3
            },
            575: {
                perPage: 2
            },
            425: {
                perPage: 1
            },
        }
    }).mount();
}
