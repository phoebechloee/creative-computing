$( document ).ready(function() {

  var links = ["christmas1.jpg","christmas2.jpg","christmas3.jpg","christmas4.jpg","christmas5.jpg","christmas6.jpg","christmas7.jpg","christmas8.jpg","christmas9.jpg","christmas10.jpg","christmas11.jpg","christmas12.jpg","christmas13.jpg","christmas14.jpg","christmas15.jpg","christmas16.jpg","christmas17.jpg","christmas18.jpg","christmas19.jpg","christmas20.jpg","christmas21.jpg","christmas22.jpg","christmas23.jpg","christmas24.jpg","christmas25.png"]
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var scrolled = false;
  var timeDelay = 200;



  // Only work in December
  if(month === 12) {
    // Loop through each calendar window
    $("li").each( function( index ) {
      var adventwindow = index + 1;
      var item = $(this);

      // Open past windows
      if( day !== adventwindow && adventwindow < day ) {
        window.setTimeout(function(){
          item.children(".door").addClass("open");
        }, timeDelay);
      }

      // timeout offset for past window opening animation
      timeDelay += 100;

      // Add words so far to message variable
      if( adventwindow <= day ) {
        var link = links[index];
        $(this).append('<div class="revealed"><img src="' + link + '" style="width:100%;""></div>');
      }

      // Add jiggle animation to current day window
      if(adventwindow === day) {
        $(this).addClass("current");
        $(this).addClass("jiggle");
      }

      // On clicking a window, toggle it open/closed and
      // handle other things such as removing jiggle and 25th
      $(this).on("click", function() {
        if(adventwindow <= day) {
          $(this).children(".door").toggleClass("open");
        }

        $(this).removeClass("jiggle");

      });

    });

  }

});
