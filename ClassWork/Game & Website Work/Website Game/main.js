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
		if(roomArray[roomIndex].choices[i].required != null)
		 {
		 if(roomArray[roomIndex].choices[i].required == "flashlight")
			 {
			 //console.log("flashlight required");
				 if(!flashlight)
				 {
					 continue;
				 }
			 }
		 // if(roomArray[roomIndex].choices[i].required != null)
		 // {
		 // 	if(roomArray[roomIndex].choices[i].required == "vine")
		 // 	{
		 // 	if(!vine)
		 // 		{
		 // 			continue;
		 // 		}
		 // 	}
		 // }
		 }

		var roomChoices = "<button type='button' onclick='SelectRoom("
		+ roomArray[roomIndex].choices[i].index
		+ ")'>"
    + roomArray[roomIndex].choices[i].text
		+ "</button>";
		document.getElementById("roomChoices").innerHTML += roomChoices;
  }
}
