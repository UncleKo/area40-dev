(function() {
   var topOffset = parseInt ($('header nav').css('height'));
   // console.log(topOffset);

   var isTouch = 'ontouchstart' in document.documentElement;

   // window height
   var fullheight = function() {
      var wheight = $(window).height(); //get height of the window

      $('.fullheight').css('height', wheight);
   }

   fullheight();

   $(window).resize(function() {
      fullheight();
   }); //on resize

   // Random Background Image
   // function changeImg(imgNumber) {
   //    var myImages = ["images/background/1.jpg", "images/background/2.jpg", "images/background/3.jpg", "images/background/4.jpg","images/background/5.jpg", "images/background/6.jpg"]; 
   //    // var imgShown = document.body.style.backgroundImage;
   //    var newImgNumber =Math.floor(Math.random()*myImages.length);

   //    $('#intro .fullheight').css('background-image', 'url('+myImages[newImgNumber]+')')
   //    // $('#intro .fullheight').css({
   //    //    'background-image': 'url('+myImages[newImgNumber]+')',
   //    //    'background-repeat': 'no-repeat',
   //    //    'background-position': 'center center',
   //    //    'background-attachment': 'fixed',
   //    //    '-webkit-background-size': 'cover',
   //    //    '-moz-background-size': 'cover',
   //    //    '-o-background-size': 'cover',
   //    //    'background-size': 'cover'
   //    // }); 
   //    // document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
   // }

   // window.onload=changeImg;

   // Random Background 2nd
   bgImageTotal=18;
   // randomNumber = Math.round(Math.random()*(bgImageTotal-1))+1;
   // Not to pick up 0
   randomNumber = Math.ceil(Math.random()*bgImageTotal);
   // To pick up 0 for white background every once in a while
   // randomNumber = Math.round(Math.random()*bgImageTotal);
   // console.log(randomNumber);
   $('header .fullheight').css("backgroundImage", 'url(/images/background/'+randomNumber+'.jpg)');	


   // Animated Scrolling
   $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topOffset
        }, 500);
        return false;
      } //target.length
    } //location hostname
   }); //on click

   $(window).scroll(function() {
      var windowpos = $(window).scrollTop(),
         nav = $('header nav');
      nav.removeClass('navShadow');
      $('h3#contact').removeClass('slideIn');
      // nav.css('position', 'static');

      if (windowpos >= nav.offset().top) {
         nav.addClass('navShadow');
         $('h3#contact').addClass('slideIn');
         // nav.css('position', 'fixed');
         // nav.css('top', '0');
         // nav.css('left', '0');
         // $('main').css('margin-top', topOffset);
      }
   });

   // heighlight navigation
   $(window).scroll(function() {
      var windowpos = $(window).scrollTop() + topOffset +1,
         link = $('#main_nav li a') ;
      link.removeClass('active');

      if (windowpos >= $('#intro').offset().top) {
         link.removeClass('active');
         $('a[href$="#intro"]').addClass('active');
      }

      if (windowpos >= $('#skills').offset().top) {
         link.removeClass('active');
         $('a[href$="#skills"]').addClass('active');
      }

      if (windowpos >= $('#process').offset().top) {
         link.removeClass('active');
         $('a[href$="#process"]').addClass('active');
      }

      if (windowpos >= $('#accessibility').offset().top) {
         link.removeClass('active');
         $('a[href$="#accessibility"]').addClass('active');
      }
   });


   //set up ScrollMagic
   var controller = new ScrollMagic({
      globalSceneOptions: {
         triggerHook: "onLeave"
      }
   });

   //pin the navigation
   var pin = new ScrollScene({
      triggerElement: 'header nav'
   }).setPin('header nav').addTo(controller);



   //Contact Form
	var placeholder = function() {
	
			var nameField = document.getElementById("name");

			nameField.onfocus = function() {
				if ( nameField.value == "お名前") {
					nameField.value = "";
				}
			};

			nameField.onblur = function() {
				if ( nameField.value == "") {
					nameField.value = "お名前";
				}
			};
			
			
			var emailField = document.getElementById("e_mail");

			emailField.onfocus = function() {
				if ( emailField.value == "メールアドレス") {
					emailField.value = "";
				}
			};

			emailField.onblur = function() {
				if ( emailField.value == "") {
					emailField.value = "メールアドレス";
				}
			};
			
			
			var subjectField = document.getElementById("subject");

			subjectField.onfocus = function() {
				if ( subjectField.value == "件名") {
					subjectField.value = "";
				}
			};

			subjectField.onblur = function() {
				if ( subjectField.value == "") {
					subjectField.value = "件名";
				}
			};
			
			
			var commentArea = document.getElementById("comments");

			commentArea.onfocus = function() {
				if ( commentArea.value == "コメント/お問い合わせ内容") {
					commentArea.value = "";
				}
			};

			commentArea.onblur = function() {
				if ( commentArea.value == "") {
					commentArea.value = "コメント/お問い合わせ内容";
				}
			};
			
		} //placeholder

      // placeholder();

   var ghost = $('#ghost');

	var Contact = {
	
		init: function() {

         // var ghost = $('<section id="ghost" class="fullheight"></section>');
	
			var contactWrap = $('<div id="contact-wrap"></div>')
												.appendTo('#ghost')
												.load( 'contact.html form#contact' )
												.hide();

			$('a#contact-link').on('click', function(e) {		
               ghost.css('z-index', '90');
					Contact.close.call(contactWrap);					
					contactWrap.fadeIn(1500);	
					placeholder();
					response();

					e.preventDefault();
			});
		
		},
		
		close: function() {
		
			var $this = $(this);
		
			if ( $this.find('span.close').length ) return;

			$('<span class="close">X</span>')
				.prependTo(this)
				.on('click', function() {					
					$this.fadeOut(1000);
               ghost.css('z-index', '-1');
			});
		
		}
	
	} //Contact
	
	Contact.init();
      
   
	var response = function() {
	
			$('form#contact').on('submit', function(e) {
			
				e.preventDefault();		
			
				$('#contact-form').append('<img src="/images/loading.gif" alt="Currently Loading" id="loading" />');
				
				$.post( '/send_email.php', $(this).serialize(), function(result) {
				
					$('#response').remove();
					$('#contact-form').append('<div id="response">' + result + '</div>');
					$('#loading').fadeOut(500, function() {
						$(this).remove();
						
					});
					
				});
				
			});	
		
		} //response

	// response();
   

})(); //on load

