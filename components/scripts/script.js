(function() {
   var topOffset = parseInt ($('#nav').css('height'));
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
   function changeImg(imgNumber) {
      var myImages = ["images/background/0001.jpg", "images/background/0002.jpg", "images/background/0003.jpg", "images/background/0004.jpg","images/background/0005.jpg", "images/background/0006.jpg"]; 
      // var imgShown = document.body.style.backgroundImage;
      var newImgNumber =Math.floor(Math.random()*myImages.length);

      $('#intro .fullheight').css('background-image', 'url('+myImages[newImgNumber]+')')
      // $('#intro .fullheight').css({
      //    'background-image': 'url('+myImages[newImgNumber]+')',
      //    'background-repeat': 'no-repeat',
      //    'background-position': 'center center',
      //    'background-attachment': 'fixed',
      //    '-webkit-background-size': 'cover',
      //    '-moz-background-size': 'cover',
      //    '-o-background-size': 'cover',
      //    'background-size': 'cover'
      // }); 
      // document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
   }

   window.onload=changeImg;

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
      triggerElement: '#nav'
   }).setPin('#nav').addTo(controller);

})(); //on load

