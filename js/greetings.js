$('.intro').css('opacity', '0')


$(document).ready(function(){

var opacity = 0.04

	var myInterval = setInterval(function(){
		if(opacity>1){
			var opacity2 = 0.04
			var myInterval2 = setInterval(function(){
				if(opacity2>1){
					clearInterval(myInterval2)
				}
				$('#part2').css('opacity',opacity2);
				opacity2 += 0.04
		
			},100)
			clearInterval(myInterval)
		}
		$('#part1').css('opacity',opacity);
		opacity += 0.04
		
	},100)

})


var greetings = ["Hello!", "Namaste!", "Bonjour!"]
				var counter = 1;
				function myFunction() {
    document.getElementById("greetings").innerHTML = greetings[counter];
    if (counter ==2) {
	counter=0;
    }
    else {
    ++counter;
    }

}

window.setInterval(myFunction,3000)
