// Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete todo item
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(600, function() {
		$(this).remove();
	});
	// Stop event bubbling up through DOM
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
	// checks if enter key (which === 13) is pressed
	if(event.which === 13) {
		// grabbing new todo text from input
		let todoText = ($(this).val() );
		// clearing input
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$("#edit").click(function () {
	$("input[type='text']").fadeToggle();
});