window.onload = function() {

	var req = new XMLHttpRequest();
	req.open('GET', 'file://localhost/Users/tmn/Dropbox/Dev/Web/Workshop/code/data/json/tdt4100.json', true);
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.status == 404) {
				document.write("meh")
			} else {
				var doc = eval("(" + req.responseText + ")");
				document.getElementById("meh").innerHTML = "Menu <br>";
				document.getElementById("meh").innerHTML += "test + " + doc.course.code;
			}
			

		}
	};
	
	
	req.send(null);

	
}