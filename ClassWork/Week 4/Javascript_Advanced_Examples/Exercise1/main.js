var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{
	//var weapons = getElementById('weapons').value
	for(var i = 0; i < weaponsArray.length; i++) {
		var weaponTag = "<option value='" + i + "'>" + weaponsArray[i] + "</option>";
		document.forms[0]["weapons"].innerHTML += weaponTag;
		console.log(weaponTag)
		//weapons = "<p>" + weaponsArray[i] + "</p>"
	}

}


function SelectWeapon()
{
	currentWeapon.innerHTML = weaponsArray [document.forms[0]["weapons"].value]
}
