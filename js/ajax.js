$(document).ready(function() {
  // "Записаться на сессию" 
  jQuery('#applicForm').on('submit', function (event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize(),
      success: 
      function () {
        function applicClose() {
          $('.applic').removeClass('applic-active')
          $('.applic-bg').removeClass('applic-bg-active')
          $('.applic-card').removeClass('applic-card-active')
          $('body').removeClass('body-active')
          $('.applic-success').removeClass('applic-success-active')
        };
          $('.applic-success').toggleClass('applic-success-active')
          setTimeout(function(){applicClose();}, 1500);
          setTimeout(function(){
            $('#applicForm')[0].reset();
          }, 1500);
      },
      error: function (jqXHR, textStatus) {
        console.error(jqXHR + " " + textStatus);
      }
    });
  })
  // Конец "Записаться на сессию" 
})