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

	var list = document.getElementById('Inventory')
	for(var i = 0; i < roomArray[roomIndex].choices.length; i++)
	{
		//Shows Requirements that the player must fufill
		if(roomArray[roomIndex].choices[i].required != null)
		 {
			// Requires Flashlight
		 	if(roomArray[roomIndex].choices[i].required == "flashlight")
			 	{

				 	if(!flashlight)
				 		{
					 		continue;
				 		}
			 	}
				//Requires Vines
		 	if(roomArray[roomIndex].choices[i].required == "vine")
		 		{
		 			if(!vine)
		 				{
		 					continue;
		 				}
		 		}
				//Requires Activation
      if(roomArray[roomIndex].choices[i].required == "coreActivation")
				{
					if(!coreActivation)
						{
							continue;
						}
				}
			// Requires weapon
			if(roomArray[roomIndex].choices[i].required == "weapon")
				{
					if(!weapon)
						{
							continue;
						}
				}
			//Requires shipCode
			if(roomArray[roomIndex].choices[i].required == "shipCode")
				{
					if(!shipCode)
						{
							continue;
						}
				}
			//requires keycard
			if(roomArray[roomIndex].choices[i].required == "keycard")
				{
					if(!keycard)
						{
							continue;
						}
				}
		 }
      //handles giving players items
 		  if(roomArray[roomIndex].choices[i].gain != null)
			  {
          //gains Flashlight
			    if(roomArray[roomIndex].choices[i].gain == "flashlight")
 						{
 							flashlight = true;
		  			}

					//gains Vine
					if(roomArray[roomIndex].choices[i].gain == "vine")
						{
							vine = true;
						}

					//Gains Weapon
					if(roomArray[roomIndex].choices[i].gain == "weapon")
						{
							weapon = true;
						}

					//activates door
					if(roomArray[roomIndex].choices[i].gain == "coreActivation")
						{
							coreActivation = true;
						}

					//gains shipCodes
					if(roomArray[roomIndex].choices[i].gain == "shipCode")
						{
							shipCode = true;
						}

					//gains keycard
					if(roomArray[roomIndex].choices[i].gain == "keycard")
						{
							keycard = true;
						}
						//Sets all items to false again
					if(roomArray[roomIndex].choices[i].gain == "clearItems")
						{
							keycard = false;
							shipCode = false;
							coreActivation = false;
							weapon = false;
							vine = false;
							flashlight = false
						}
    }
		var roomChoices = "<button type='button' onclick='SelectRoom("
		+ roomArray[roomIndex].choices[i].index
		+ ")'>"
    + roomArray[roomIndex].choices[i].text
		+ "</button>";
		document.getElementById("roomChoices").innerHTML += roomChoices;
  }
}

function getItems()
{
	var item = document.getElementById("Inventory");
	var li = document.createElement("li")

  if(flashlight = true)
  {
    li.text = "Flashlight";
    item.add(li)
  }
}
