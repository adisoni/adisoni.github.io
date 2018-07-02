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
