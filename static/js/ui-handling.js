
function openSidebar(){
	console.log("Opening sidebar");
	document.getElementById("sidebar").style.width = "150px";
	document.getElementById("sidebar-close").style.display = "block";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSidebar(){
	console.log("Closing sidebar");
	document.getElementById("sidebar").style.width = "0px";
	document.getElementById("sidebar-close").style.display = "none";
	document.body.style.backgroundColor = "white";
}