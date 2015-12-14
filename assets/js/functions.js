$(document).ready(function  () {
  "use sterict";
	
	<!-- bootstrap scrollspy -->
		
	$('body').scrollspy({
		target: '.navbar',
		offset: 160
	});
	
	 /* ============================= 
               SKILLBAR 
    ================================ */
	
	 var skillBarTopPosition = $('.skillbar').position().top;
    $(document).scroll(function() {
        var scrolled_value = $(document).scrollTop().valueOf();
        if(scrolled_value > skillBarTopPosition - 250) {
            startAnimation();
        }
    });
    function startAnimation() {
        $('.skillbar').each(function() {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 6000);
        });
    };
	
	/* ============================= 
               PORTFOLIO SECTION
    ================================ */
	
	$('#portfolio a').nivoLightbox({
		effect: 'fadeScale'
	});
	
	
	/* ============================= 
               OWL_CAROUSEL TEAM 
    ================================ */
    $('#owl-carousel-team').owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination: true,
        paginationNumbers: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window
    });
	
});




    /* ============================= 
               FANCYBOX 
    ================================ */
    $('.youtube-media').on('click', function(event) {
        
        var windowWidth = $(window).width();
        
        if(windowWidth <= 410) {
            return;
        }
        
        $.fancybox({
            href: this.href,
            padding: 4,
            type: 'iframe',
            'href': this.href.replace(new RegExp('watch\\?v=', 'i'), 'v/'),
        });
        
        return false;
    });

    





<!-- Navbar -->
	
$(window).scroll(function  () {
  var top = $(document).scrollTop();
  var batas = $(window).height();
  
  if (top > batas) {
	  $('.main-menu').addClass('tiny');
	  $('.main-menu').css('opacity', '1');
  } else {
	  $('.main-menu').removeClass('tiny');
  }
});


