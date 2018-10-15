
function slideUp() {
	$( ".modal" ).slideUp('slow');
}

$( ".boton" ).on( "click", function() {
	slideUp();
});

$(document).on('keypress' , function(e) {
	if (e.keyCode == 13) {
	  slideUp();
	}
});

function ShowIt(tab, content) {
	$(tab).on("click", function () {
		if ($(content).hasClass("hide")) {
			$(content).removeClass("hide");
			$(content).addClass(" flex");
			$(content).siblings().removeClass("flex");
			$(content).siblings().addClass("hide")
		}
	})	
}

ShowIt("#home", ".homeContent");
ShowIt("#abUs", ".abUsContent");
ShowIt("#MyV", ".MyVContent");
ShowIt("#Port", ".PortContent");
ShowIt("#Cont", ".ContContent");