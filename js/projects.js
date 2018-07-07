$('.projectImages').hide()		
		
$('#project1').click(function(){
	$('.projectImages').hide()		
	$('#project1Image').show()
	$('#project2Image video').get(0).load()
	$('#project3Image video').get(0).load()
	$('#project1Image video').get(0).play()
	$('.projects p, .projects button').hide()
	$('#project1 p, #project1 button').show()
	$('#project2').removeClass('hovered');			
	$('#project3').removeClass('hovered');
	$('#project4').removeClass('hovered');
	 $('html, body').animate({
        scrollTop: $(document).height()
    }, 1);
	$(this).toggleClass("hovered");
})		

$('#project2').click(function(){
	$('.projectImages').hide()		
	$('#project2Image').show()
	$('#project1Image video').get(0).load()
	$('#project3Image video').get(0).load()
	$('#project2Image video').get(0).play()
	$('.projects p, .projects button').hide()
	$('#project2 p, #project2 button').show()
	$('#project1').removeClass('hovered');			
	$('#project3').removeClass('hovered');
	$('#project4').removeClass('hovered');
	 $('html, body').animate({
        scrollTop: $(document).height()
    }, 1);
	$(this).toggleClass("hovered");
})

$('#project3').click(function(){
	$('.projectImages').hide()		
	$('#project3Image').show()
	$('#project2Image video').get(0).load()
	$('#project1Image video').get(0).load()
	$('#project3Image video').get(0).play()
	$('.projects p, .projects button').hide()
	$('#project3 p, #project3 button').show()
	$('#project2').removeClass('hovered');			
	$('#project1').removeClass('hovered');
	$('#project4').removeClass('hovered');
	 $('html, body').animate({
        scrollTop: $(document).height()
    }, 1);

	$(this).toggleClass("hovered");
})


$(document).ready(function(){
	$('.projectImages').hide()		
	$('#project1Image').show()
	$('#project2Image video').get(0).load()
	$('#project1Image video').get(0).play()
	$('.projects p').hide()
	$('#project1 p').show()
	$('#project2').removeClass('hovered');			
	$('#project3').removeClass('hovered');
	$('#project4').removeClass('hovered');
	$('#project1').toggleClass("hovered");
})



