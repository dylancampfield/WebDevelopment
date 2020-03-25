$(document).ready(function() {

        // get the image URL and caption for each image
    $("#image_list a").each(function()
    {
        var imgSwap = new Image();

        // preload the image for each link
        imgSwap.src = $(this).attr("href");
        imgSwap.title = $(this).attr("title");
    });

        // set up the event handlers for each link
    $("#image_list a").click(function(evt)
    {
        var imgURL = $(this).attr("href");
        $("#image").attr("src", imgURL);

        var caption = $(this).attr("title");
        $("#caption").text(caption);


        // cancel the default action of each link
        evt.preventDefault();
    });
    // move the focus to the second link
    $("li:nth-child(2) a").focus();
}); // end ready