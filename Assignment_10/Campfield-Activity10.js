$(document).ready(function() {

        // preload the image for each link
    $("#image_list a").each(function(){
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
        swappedImage.title = $(this).attr("title");
    });
        // set up the event handlers for each link
    $("#image_list a").click(function(evt){
        // cancel the default action of each link
        evt.preventDefault();
        var select = this;

        // get the image URL and caption for each image

        $("#caption").fadeOut(2000);
        $("#image").fadeOut(2000, function(){
            var imageURL = $(select).attr("href");
            var caption = $(select).attr("title");

            $("#image").attr("src", imageURL);
            $("#caption").text(caption);
            $("#image").fadeIn(2000);
            $("#caption").fadeIn(2000);
            $("#caption").animate({fontSize: "1.5em"}, 2000);
        });
    });

    // move the focus to the first link
    $("li:first-child a").focus();

}); // end ready