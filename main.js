$(document).ready(function() {
  $(".content-box").on("click", function() {

    var content = $(this).text();
    var myInput = $("<textarea>"+content+"</textarea>");
    myInput.addClass($(this).attr("class"));

    $(this).closest(".prof-item").append(myInput);
    $(this).hide();

  });

  $(".prof-item").on("blur", "textarea", function(){
    
    var userInput = $(this).val();
    console.log(userInput==="");
    
    if(userInput==="") {
      $(this).siblings(".content-box").show();
      $(this).remove();
    }
    else {
      $(this).siblings(".content-box").text(userInput);
      $(this).siblings(".content-box").show();
      $(this).remove();
    }

  });


});
