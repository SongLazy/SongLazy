// JavaScript Document

$(document).ready(function(e) {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
	$('.center').slick({
		dots: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
		slidesToScroll: 1,
        responsive: [{
           breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
            }
        }]
    });
	
});
