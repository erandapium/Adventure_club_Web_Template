jQuery(document).ready(function(){
  var navOffset = jQuery(".page-header").offset().top;
  jQuery(".page-header").wrap('<div class="nav-placeholder"></div>');
  jQuery(".nav-placeholder").height(jQuery(".page-header").outerHeight());
  jQuery(window).scroll(function(){
    var scrollPos = jQuery(window).scrollTop();

    if(scrollPos > navOffset) {
      jQuery(".page-header").addClass("fixed");
    } else {
      jQuery(".page-header").removeClass("fixed");
    }

  });


});
