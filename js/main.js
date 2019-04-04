// console.log("hello world");
//$(console.log("hello world"));

// this is the jQuery syntax for handling events
//$(" element ").event(function(){
//  $(" element ").action;
//})

//here it is in action!
$("#paragraph2 , #lessTextButton").hide();

$("#moreTextButton").click(function(){
  $("#paragraph2 , #lessTextButton").fadeIn();
  $("#lessTextButton").show();
  $("#moreTextButton").hide();
});

$("#lessTextButton").click(function(){
  $("#paragraph2 , #lessTextButton").fadeOut();
  $("#lessTextButton").hide();
  $("#moreTextButton").show();
});

$("#addExtra").click(function(){
  $("ul").append("<li>we brush our teeth with pizza</li>");
});

$("#remove").click(function(){
  $("li").last().remove();
  // 'last' is shorthand in jQuery for last child
  // jQuery selectors son ~~
})

$("#light").click(function(){
  $("#paragraph1").css("opacity" , "0.2");
  // we use multiple strings because we're passing multiple values into the CSS
  // cf. using a single string when we separate values with a comma
})

$("#dark").click(function(){
  $("#paragraph1").css("opacity" , "1.0");
})

$("#username").click(function(){
  $("html , body").animate({
    scrollTop:$("#usernameField").offset().top}, 1000);
})


// console.log("hello world");
//
// $(document).ready(function(){
//   console.log("jQuery is up");

  // we use the dollar sign to indicate that we're writing in jQuery.
  // we call the $ an 'identifier'; it is a function defiend for us in jQuery
  // when the object (document) has loaded, perform the ready function, which is defined in jQuery
  // the ready function will log a string to the console
  // if we get an 'object undefined' error, it's because $ (the object called document) isn't defined
  // this is because jQuery.js follows main.js in our HTML; we are calling jQuery functions before we've loaded the library

  //$("p").hide();
    //$("p") is shorthand, ty jQuery, for 'get all of the <p> tags from our document'
    //hide() is another jQuery function. Guess what it does.

  // $("#box2").hide();
    //so this is the shorthand, ty jQuery, for 'get #box2 from the document and do Hide to it'
    // i know it seems super weird to have a hashtag in a string like this, but that's okay. I think it's because jQuery does this on line 610:
    // 		"ID": new RegExp( "^#(" + identifier + ")" )


  // $(".box2").hide();
    //so this is the shorthand, ty jQuery, for 'get everything with the .box2 class from the document and do Hide to it'

  // $(".hide").show();
    // so this will look for a display property that will show the element in the CSS, and if it can't find one, it'll default to 'block'.

  $("#box1").click(function(){
    // console.log("red box got a click");
    // $("#box2").hide();
    $("#box2").fadeOut();
  })

  $("#box4").click(function(){
    // console.log("green box got a click");
    // $("#box2").show();
    $("#box2").fadeIn();
  })

  //some more jQuery events:
  // .click();
  // .dblclick();
  // .mouseover();
  // .mouseleave();
  // .hover();

  $("#box3").click(function(){
      // $("#box4").addClass("boxLarge blue");
      //the order in which your state changes appear in yr CSS is important. Think SMACSS, with its state changes right at the bottom
      // $("#box1").css("width", "400px");
      // $("#box2").css({"width":"400px" , "height":"300px"});
  })

  $(".box").click(function(){
    $(this).toggleClass("boxLarge");
    // 'this' specifies that the function only applies to the element whose event which is calling the function
    // 'this' will only work if it's nested inside a function ...
    // ... and it will only refer to the object inside whose function it is nested.
    // so in this case , $(this) only refers to $(".box")
  });

}); //check yr indentation!
