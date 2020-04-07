$(document).ready(function() {
	$("#speakerLinks a").click(function(){
		var files = "json_files/" + $(this).attr('title') + ".json";
		$.getJSON(files, function(data){
			$.each(data, function(){
				$.each(this, function(key, value){
					$("main").empty();
					$("main").append(
						"<h1>" + value.title + "</h1>" +
						"<h2>" + value.month + "</h2>" +
						"<h3>" + value.speaker + "</h3>" +
						"<img src=\"" + value.image + "\" alt=\"Speaker Photo\">" +
						"<p>" + value.text + "</p>"
					);
				});
			});
		});
	});
}); // end ready
