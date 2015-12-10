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


