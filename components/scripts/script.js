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
   bgImageTotal=6;
   // randomNumber = Math.round(Math.random()*(bgImageTotal-1))+1;
   randomNumber = Math.ceil(Math.random()*bgImageTotal);
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
        }, 1000);
        return false;
      } //target.length
    } //location hostname
   }); //on click

   $(window).scroll(function() {
      var windowpos = $(window).scrollTop(),
         nav = $('header nav');
      nav.removeClass('navShadow');
      // nav.css('position', 'static');

      if (windowpos >= nav.offset().top) {
         nav.addClass('navShadow');
         // nav.css('position', 'fixed');
         // nav.css('top', '0');
         // nav.css('left', '0');
         // $('main').css('margin-top', topOffset);
      }
   });

   // heighlight navigation
   // $(window).scroll(function() {
   //    var windowpos = $(window).scrollTop() + topOffset;
   //    $('nav li a ').removeClass('active');

   //    if (windowpos >= $('').offset().top) {
   //       $('nav li a ').removeClass('active');
   //       $('a[href$="#hotelinfo"]').addClass('active');
   //    }
   // });


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

})(); //on load

