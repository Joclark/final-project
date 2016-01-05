
console.log('it works');
$(document).ready(function(){

   	$(firstOne).show()
	$('#primary-nav .fire-nav').on('click', function(event){

		event.preventDefault();
		$('.drop').fadeOut(200)

		var idToShow = $(this).attr('href');

		$(idToShow).slideDown()

		// if I click international again then
		if ($('#primary-nav .find-a-trainer').hasClass('active')) {
			// remove the active class
			$('#primary-nav .find-a-trainer').removeClass('active');
			// slide the mega nav up
			$('#slide-down').slideUp();
		} else {
			// add an active class to the item
			$('#primary-nav li.find-a-trainer').addClass('active');
			// hide all the sections
			$('.drop').hide();
			// show the international section
			$('#slide-down .find-a-trainer').show();
			// the mega nav slides down
			$('#slide-down').slideDown();
		}
	});
// when I click on the international list item
$('#primary-nav .find-a-trainer').on('click', function(event){

	event.preventDefault();

	// if I click international again then
	if ($('#primary-nav .find-a-trainer').hasClass('active')) {
		// remove the active class
		$('#primary-nav .find-a-trainer').removeClass('active');
		// slide the mega nav up
		$('#slide-down').slideUp();
	} else {
		// add an active class to the item
		$('#primary-nav li.find-a-trainer').addClass('active');
		// hide all the sections
		$('.drop').hide();
		// show the international section
		$('#slide-down .find-a-trainer').show();
		// the mega nav slides down
		$('#slide-down').slideDown();
	}
	});
	
	$('#primary-nav .about-us').on('click', function(event){

	event.preventDefault();

	// if I click international again then
	if ($('#primary-nav .about-us').hasClass('active')) {
		// remove the active class
		$('#primary-nav .about-us').removeClass('active');
		// slide the mega nav up
		$('#slide-down').slideUp();
	} else {
		// add an active class to the item
		$('#primary-nav li .about-us').removeClass('active');
		$('#primary-nav .about-us').addClass('active');
		// hide all the sections
		$('.drop').hide();
		// show the politics section
		$('#slide-down .about-us').show();
		// the mega nav slides down
		$('#slide-down').slideDown();
		}
	});

	$('primary-nav .leadership-and-personal-development').on('click', function(event){

	event.preventDefault();

	// if I click international again then
	if ($('primary-nav.leadership-and-personal-development').hasClass('active')) {
		// remove the active class
		$('primary-nav .leadership-and-personal-development').removeClass('active');
		// slide the mega nav up
		$('#slide-down').slideUp();
	} else {
		// add an active class to the item
		$('primary-nav li .leadership-and-personal-development').removeClass('active');
		$('.nav .leadership-and-personal-development').addClass('active');
		// hide all the sections
		$('.drop').hide();
		// show the politics section
		$('#slide-down .leadership-and-personal-development').show();
		// the mega nav slides down
		$('#slide-down').slideDown();
		}
	});


	
	// when I click on a different list item
	// show the relevant section of articles
	// remove the active class previous nav item
	// add the active class to this new nav item
});