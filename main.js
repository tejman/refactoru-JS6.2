$(document).ready(function() {
  $(".text").on("click", function() {

    var content = $(this).text();
    var myInput = $("<input type:'text'>"+content+"</input>");

    $(this).closest(".prof-item").append(myInput);
    $(this).css("display", "none");

  });

  $(".prof-item").on("blur", "input", function(){
    
    var userInput = $(this).val();
    
    if(userInput!="") {
      $(this).siblings(".text").text(userInput);
      $(this).siblings(".text").css('display', "block");
      $(this).remove();
    }
    else {
      $(this).siblings(".text").css('display', "block");
      $(this).remove();
    }

  });


});
