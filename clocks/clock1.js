$(document).ready(function() {

      $(function() {
          setInterval(function() {
            var color = 0;
            var hour = new Date().getHours();
            var minute = new Date().getMinutes();
            var seconds = new Date().getSeconds();
            var whatToPrint = hour + ":" + minute + ":" + seconds;
            $("#sec").html(whatToPrint);
          }, 1000);
        });
      });
