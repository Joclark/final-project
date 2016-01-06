
console.log('it works');
$(document).ready(function(){

   	// $(firstOne).show()
	// $('#primary-nav .fire-nav').on('click', function(event){

		// event.preventDefault();
		// $('.drop').fadeOut(200)

		// var idToShow = $(this).attr('href');

		// $(idToShow).slideDown()
		// wills stuff?


		// if I click international again then
		// if ($('#primary-nav .find-a-trainer').hasClass('active')) {
			// remove the active class
			// $('#primary-nav .find-a-trainer').removeClass('active');
			// slide the mega nav up
			// $('#slide-down').slideUp();
		// } else {
			// add an active class to the item
			// $('#primary-nav li.find-a-trainer').addClass('active');
			// hide all the sections
			// $('.drop').hide();
			// show the international section
			// $('#slide-down .find-a-trainer').show();
			// the mega nav slides down
			// $('#slide-down').slideDown();
		// }
	// });
// when I click on the find a trainer list item
$('#primary-nav .find-a-trainer').on('click', function(event){

	event.preventDefault();

	// if I click find a trainer again then
	if ($('#primary-nav .find-a-trainer').hasClass('active')) {
		// remove the active class
		$('#primary-nav .find-a-trainer').removeClass('active');
		// slide the mega nav up
		$('#slide-down').slideUp();
	} else {
		// add an active class to the item
		$('#primary-nav li.find-a-trainer').addClass('active');
		// hide all the sections
		$('.drop').show();
		// show the find a trainer section
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
		$('#slide-down2').slideUp();
	} else {
		// add an active class to the item
		$('#primary-nav li .about-us').removeClass('active');
		$('#primary-nav .about-us').addClass('active');
		// hide all the sections
		$('.drop').hide();
		// show the politics section
		$('#slide-down2 .about-us').show();
		// the mega nav slides down
		$('#slide-down2').slideDown();
		}
	});

	$('#primary-nav .leadership-and-personal-development').on('click', function(event){

	event.preventDefault();

	// if I click international again then
	if ($('#primary-nav.leadership-and-personal-development').hasClass('active')) {
		// remove the active class
		$('#primary-nav .leadership-and-personal-development').removeClass('active');
		// slide the mega nav up
		$('#slide-down3').slideUp();
	} else {
		// add an active class to the item
		$('#primary-nav li .leadership-and-personal-development').removeClass('active');
		$('#primary-nav .leadership-and-personal-development').addClass('active');
		// hide all the sections
		$('.drop').hide();
		// show the politics section
		$('#slide-down3 .leadership-and-personal-development').show();
		// the mega nav slides down
		$('#slide-down3').slideDown();
		}
	});

	$('#primary-nav .it-training').on('click', function(event){

	event.preventDefault();

	// if I click international again then
	if ($('#primary-nav.it-training').hasClass('active')) {
		// remove the active class
		$('#primary-nav .it-training').removeClass('active');
		// slide the mega nav up
		$('#slide-down4').slideUp();
	} else {
		// add an active class to the item
		$('#primary-nav li .it-training').removeClass('active');
		$('#primary-nav .it-training').addClass('active');
		// hide all the sections
		$('.drop').hide();
		// show the politics section
		$('#slide-down4 .it-training').show();
		// the mega nav slides down
		$('#slide-down4').slideDown();
		}
	});

$('#primary-nav .trainers-profiles').on('click', function(event){

	event.preventDefault();

	// if I click international again then
	if ($('#primary-nav .trainers-profiles').hasClass('active')) {
		// remove the active class
		$('#primary-nav .trainers-profiles').removeClass('active');
		// slide the mega nav up
		$('#slide-down5').slideUp();
	} else {
		// add an active class to the item
		$('#primary-nav li .trainers-profiles').removeClass('active');
		$('#primary-nav .trainers-profiles').addClass('active');
		// hide all the sections
		$('.drop').hide();
		// show the politics section
		$('#slide-down5 .trainers-profiles').show();
		// the mega nav slides down
		$('#slide-down5').slideDown();
		}
	});

$('#primary-nav .trainer-jobs').on('click', function(event){

	event.preventDefault();

	// if I click international again then
	if ($('#primary-nav .trainer-jobs').hasClass('active')) {
		// remove the active class
		$('#primary-nav .trainer-jobs').removeClass('active');
		// slide the mega nav up
		$('#slide-down6').slideUp();
	} else {
		// add an active class to the item
		$('#primary-nav li .trainer-jobs').removeClass('active');
		$('#primary-nav .trainer-jobs').addClass('active');
		// hide all the sections
		$('.drop').hide();
		// show the politics section
		$('#slide-down6 .trainer-jobs').show();
		// the mega nav slides down
		$('#slide-down6').slideDown();
		}
	});


	
	// when I click on a different list item
	// show the relevant section of articles
	// remove the active class previous nav item
	// add the active class to this new nav item
});