var r = 16
var g = 16
var b = 16



setInterval(function(){
	if(r === 255){
		r = 16
		g++
	} else {
		r += 5
	}
	if (g === 255) {
		g = 16
		b++
	} 
	

	let red = String((r).toString(16))
	let green = String((g).toString(16))
	let black = String((b).toString(16))
	let final = red.concat(green,black)

	document.getElementById("box").style.backgroundColor = "#"+final
	document.getElementById("box").innerHTML = "#"+final
	console.log(final)
}, 1500)























