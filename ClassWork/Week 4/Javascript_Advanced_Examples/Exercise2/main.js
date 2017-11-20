
function StorePlayerData()
{
	var name = localStorage.setItem("playername", document.forms[0]['playername'].value);
	var health = localStorage.setItem("playerhealth", document.forms[0]['playerhealth'].value);
	var color = localStorage.setItem("playercolor", document.forms[0]['playercolor'].value.style.backgroundcolor);



	//getElementById('playername').innerHTML = name;
	//getElementById('playerhealth').innerHTML = health;
	/*
  var pname = document.forms[0]['playername'].value
	var health = document.forms[0]['playerhealth'].value
	var color = document.forms[0]['playercolor'].value


	localStorage.setItem("playername", "some name")
	localStorage.setItem("playerhealth", health)
	localStorage.setItem("playercolor", color)
*/


}
