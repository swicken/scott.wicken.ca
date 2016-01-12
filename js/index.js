$(document).ready(function(){
  setTimeout(function(){
    $('.trans--grow').addClass('grow');
}, 275);
	$('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 
  
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
      
	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});