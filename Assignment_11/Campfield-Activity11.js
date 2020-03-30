<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {
    $("#tabs").accordion({
        event: "click", collapsible: "true", heightStyle: "content"
    });
});