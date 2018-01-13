//Website





//Engine for multiple choices
function OnLoad()
{
	SelectRoom(0);
	document.body.style.backgroundColor = "black"
}
function SelectRoom(roomIndex)
{
	document.getElementById('roomTitle').innerHTML =  roomArray[roomIndex].title;
	document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;
	document.getElementById('roomChoices').innerHTML = " ";

	for(var i = 0; i < roomArray[roomIndex].choices.length; i++)
	{
		var roomChoices = "<button type='button' onclick='SelectRoom("
		+ roomArray[roomIndex].choices[i].index
		+ ")'>"
    + roomArray[roomIndex].choices[i].text
		+ "</button>";
		document.getElementById("roomChoices").innerHTML += roomChoices;
	}
}
