(function($){
    
    $(function() {
        $('.lazy').Lazy();
    });


    $('.mini_gallery_slider').each(function (idx, item) {
        var carouselId = "carousel" + idx;
        this.id = carouselId;
        $(this).slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            //adaptiveHeight: true
        });
    });
        
    var faq = $('.faq .a').hide();
    $('.faq .q').click(function() {
        $(this).parent().siblings().find('.q').removeClass('open');
        $(this).stop().toggleClass('open');
        $(this).siblings('.a').stop().slideToggle();
        $(this).parent().siblings().find('.a').slideUp();
    });
    
    $('.js_show_all_reviews').click(function(e){
       e.preventDefault();
       $(this).hide();
       $('.feedback_slider .item').slideDown(); 
    });
      
    $("input[name='tel']").mask("+7 (999) 999-99-99");  
    $("input[name='birthday']").mask("99-99-9999");
    
    $("a.fancybox").fancybox({
        padding: 0,
        scrolling: 'auto',
	});
	
	$('#mmenu').click(function(){
		$(this).toggleClass('open');
		$('.header .menu').toggleClass('open');
	});
	

    $(function() {
      $('.anhors a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

	
	// quiz
    $('#step_next').on('click', function (e) {
        e.preventDefault()
        $('#steps .step.active').removeClass('active').next().addClass('active')
        $('#step_back').parent().show();

        if ( $('#steps .step.last').hasClass('active') ) {
            $('.step_navigation').hide();
        }
                
        if ( $('#steps .step.last_test').hasClass('active') ) {
            $('.step_navigation #step_next').hide();
        }

        // запишем значения в форму
        var stepsArray = [],
            stepsArrayTest = [],
            num = 0,
            formTitle = '';

        $('#steps .step:not(.last):not(.last_test)').each(function () {
            num++
            stepsArray.push(num + ' ' + $(this).children().find('input:checked').val())
            
            stepsArrayTest.push($(this).children().find('input:checked').val())  
        })

        $('.questions textarea[name="textarea"]').val(stepsArray.join("\n"))
    });

    $('#step_back').on('click', function (e) {
        e.preventDefault()
        $('#steps .step.active').removeClass('active').prev().addClass('active')
        
        $('.step_navigation #step_next').show();
        
        if ( $('#step_0').hasClass('active') ) {
            $('#step_back').parent().hide()
        }
    });
	
	
	$('input[type="radio"]').on('change', function(){
    	$('.wpcf7-radio .wpcf7-list-item').removeClass('active');
	    $('.wpcf7-radio input:checked').parent().parent().prev().addClass('active');
	    $('.wpcf7-radio input:checked').parent().parent().prev().prev().addClass('active');
	    $('.wpcf7-radio input:checked').parent().parent().prev().prev().prev().addClass('active');
	    $('.wpcf7-radio input:checked').parent().parent().prev().prev().prev().prev().addClass('active');
	});
	
	
    $('a[href="#discount"]').click(function(){
		var c = $(this).data('club'),
		    d = $(this).data('discount'),
		    m = $(this).data('mail');
		    
		$('#discount input[name="text-club"]').val(c);
		$('#discount input[name="text-discount"]').val(d);
		$('#discount input[name="email-club"]').val(m);
	});
	
	if ($(window).width() < 1025) {
		$('.feedback_slider').slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false,
           dots: true,
           adaptiveHeight: true,
        });
	}
	
})(jQuery);