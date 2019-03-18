/**
*
* @fileOverview Various examples of jQuery
*
* @author Dario Hernandez
* The output of these examples {JQuery/index.html}
*
*/

$(document).ready(function(){

  // USING SELECTOR 'this'

  $("#test").click(function(){
    $(this).hide();
  });


  // ATTACHING MULTIPLE EVENT HANDLERS TO ONE ELEMENT

  $("#events").on({
    mouseenter: function(){
      $(this).css("background-color", "red");
    },
    mouseleave:  function(){
      $(this).css("background-color", "yellow");
    },
    click: function(){
      $(this).css("background-color", "green");
    }
  });


  //SHOW AND HIDE ELEMENTS WITH SPEED PARAMETER AND TOGGLE

  // hide
  $("#hide-elements").click(function(){
    $("p.show-and-hide").hide(2000);
  });
  //show
  $("#show-elements").click(function(){
    $("p.show-and-hide").show(1500);
  });
  //toggle
  $("#toggle-elements").click(function(){
    $("p.show-and-hide").toggle();
  });

  // FADING ELEMENTS

  // Fade out
  $("#fade-in-and-out-1").click(function(){
    $(this).fadeOut();
  });
  $("#fade-in-and-out-2").click(function(){
    $(this).fadeOut("slow");
  });
  $("#fade-in-and-out-3").click(function(){
    $(this).fadeOut(2000);
  });

  // Fade In
  $("#fade-in-button").click(function(){
    $("#fade-in-and-out-1").fadeIn();
    $("#fade-in-and-out-2").fadeIn("slow");
    $("#fade-in-and-out-3").fadeIn(2000);
  });

  // Slide
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });

  // ANIMATION

  // Basic example
  $("#basic-animation-button").click(function(){
    $("#div-to-animate").animate({left: '300px'}, "slow")
  });

  // Manipulate multiple CSS properties
  $("#multiple-css-props").click(function(){
    $("#div-to-animate").animate({
      left: '500px',
      width: '200px',
      height: '200px'
    });
  });

  // Using relative values
  $("#using-relative-values").click(function(){
    $("#div-to-animate").animate({
      left: '500px',
      width: '+=150px',
      height: '+=150px'
    })
  });

  // Using pre-defined values
  $("#using-predefined-values").click(function(){
    $("#div-to-animate").animate({
      width: 'toggle'
    }, "slow")
  });

  // Using queue functionality
  $("#using-queue-functionality").click(function(){

    var div = $("#div-to-animate");

    div.animate({right: '600px'}, "slow");
    div.animate({height: '150px'}, "fast");
    div.animate({left: '600'}, "slow");
    div.animate({height: '100px'}, "fast");
  });

  // GET CONTENT - text(), html(), and val()
  // text
  $("#get-content-text").click(function(){
    alert("Text: " + $("#the-text").text());
  });

  // html
  $("#get-content-html").click(function(){
    alert("HTML: "+ $("#the-text").html());
  });

  // attibute
  $("#get-content-attribute").click(function(){
    alert("Style: " + $("#div-to-animate").attr("style"));
  });

  // SET CONTENT

  // text
  $("#for-setting-text").click(function(){
    $("#testing-text").text("This text overrides original")
  });

  // html
  $("#for-setting-html").click(function(){
    $("#other-testing-text").html("<i>Setting HTML</i>")
  });

  // value
  $("#for-setting-values").click(function(){
    $("#for-testing-too").val("Some text to set")
  });

  // ADD ELEMENTS

  // append()
  $("#for-appending-text").click(function(){
    $("#some-text").append("Appended text");
  });
  $("#for-appending-list-items").click(function(){
    $("ol").append("<li>Appended item</li>");
  });
  
});
