$(document).ready(function(){
  $("#lunch").click(function() { //Event listener
    $.ajax({ //Begin AJAX request
      type: "get",
      url: "../js/lunchMenu.json", //Menu file
      dataType: "json",
      success: function(data) {
        $("#menus").html("");  //Find menus ID to place data
        $.each(data, function() {
          $.each(this, function(key, value) {
            $("#menus").append(
              "<h1><b>" + value.item + "</b></h1>" +
              "<h3><em>" + value.price + "</em></h3>" +
              "<p>" + value.description + "</p><br>");
          });
        });
      }
    });
  });
});
