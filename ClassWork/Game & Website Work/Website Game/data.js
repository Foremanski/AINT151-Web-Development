

var roomArray = [

	{
		title: 'Crash', //0
		text: 'You wake up in a crashed pod, luckily you managed to survive the crash but the wilderness of this planet is to likely kill you.',
		choices: [
			{
				text:'Pull emergency lever',
				index:1
			}
		]
	},
 {
 	 title: 'Pull emergency lever', //1
 	 text: 'With the pod behind you, you step onto a rocky cliffside. Below you is a dense jungle, but you will need something to climb down with. To the left of you is a lighter and less dense forest. You could also search the surrounding area as well.',
 	 choices: [
 		{
 		 		text: 'Search the Cliffside',
 		 		index: 17
	 	},
 	 	{
 		 		text: 'Proceed to Forest',
 		 		index: 3
 	 },
 	 {
 		 text: 'Proceed to Jungle',
  		 index: 2
 	 },
 	 ]
 },
 {
 	 title: 'Search the Cliffside', //17
 	 text: 'You decide to look around to see if there is anything of use from the ruins of the pod. You find a flashlight that could be useful in dark places (Player gains flashlight that can be used in caves)',
 	 choices: [
 		 {
 		 text:'Back to Cliffside',
 		 index: 1
 	   },
 	 ]
 },
  {
 	title: 'Proceed to Forest', //3
 	text:'You step into the forest, hoping it will lead you to the ship. As you walk through you see a dark opening in the ground, a cave system by some sorts. You could go down there but you will need something to light the way.',
 	choices: [
 		{
 		text:'Back to Cliffside',
 		index: 2
	},
     {
     text:'Enter cave',
     index: 5
	 },
     {
     text:'Continue walking through forest',
     index:22
	 },
     {
      text: 'Search forest area',
      index: 18
		},
 	]
},
  {
 	 title: 'Search forest area', //18
 	 text: 'Looking around, the forest area is covered by vines. You cut off a sizable vine from the nearest tree, thinking it could be used for something. (Player gains vine which can be used to go down into the jungle',
 	 choices: [
 		 {
 		 text: 'Back to forest',
 		 index: 3
 	   }
 	 ]
 },
  {
 	 title:'Continue walking through the forest', //22
 	 text:'After walking for sometime, it’s obvious that this way will not lead to the ship. However pieces of the ship do seem to be strewn around the area. You should probably turn around and find a different route.',
 	 choices: [
 		 {
 		 text:'Back to forest',
 		 index:3
	 },
	 {
		 text: 'Search forest edge',
		 index:23
	 },
 	 ]
 },
  {
 	title:'Search forest edge', //6
 	text: 'You look around and find a charred keycard. Hopefully it will still work on some of the doors. (Player gains entrance card)',
 	choices: [
 		{
 		text: 'Back to forest edge',
 		index: 22
	},
 	]
},
{
title:'Jungle', //3
text:'Using the vine you picked up to climb down, you reach a dense and humid Jungle. Reaching above the canopy are the smoking ruins of your ship.',
choices: [
	{
		text: 'Proceed to field',
		index: 4
	},
	{
		text: 'Climb up the vine to cliffside',
		index: 1
	},
 ]
},
{
	title: 'Field', //8
	text:'You now stand in a field , behind you is the dense jungle and just ahead of you is the ruins of ship. Out of the corner of your eye you spot what appears to be a cave opening. ',
	choices: [
		{
			text: 'Proceed to ship entrance',
			index: 7
		},
		{
			text: 'Explore the cave',
			index: 6
		},
	]
},
{
   title:'Cave', //5
	 text:'You now stand in a cavern, light from a forest streaming down into the cave. Ahead of you is a continuation of the cave, but it does lead deeper',
	 choices:[
		 {
			 text: 'Go back to forest',
		   index: 3
		 },
		 {
			 text:'Proceed deeper into the cave',
			 index:6
		 },
	 ]
},
{
	title: 'Cave choice', //6
	text: 'You come across an intersection in the cave. One tunnel looks like it opens up more, one tunnel has what appears to be natural light coming from it, one tunnel has an eerie red glow and one appears to have pieces of metal spread around it.',
  choices: [
		{
			text: 'Go through larger tunnel',
			index: 5
		},
		{
			text: 'Go towards the natural light',
			index: 4
		},
		{
			text: 'Go through the red light tunnel',
			index: 9
		},
		{
			text: 'Go through the metal tunnel',
			index: 10
		},
	]
},
{
	title:'Ship entrance ', //7
	text:'Coming from the field you are now dwarfed by the sides of the ship you travelled on. A door stands in front of you that will likely lead to the main section of the ship. However you will need a keycard to gain access to this part of the ship. ',
	choices: [
		{
			text:'Open up the door and proceed inside ',
			index: 8
		},
		{
			text: 'Go back to the field',
			index: 4
		},
	]
},
{
	title:'Sub-Entrance', //9
	text:'Travelling towards the eerie red light. You come across a door in the cave, a little red light flashing beside it. The ship must have made quite an impact to have a ship entrance reach this far down. To open the door you’ll need a keycard of some sort',
	choices: [
		{
			text:'Go through the door',
			index: 8
		},
		{
			text: 'Go back to the intersection',
			index: 6
		},
	]
},
{
	title:'Hull breach', //10
	text:'You walk down a tunnel strewn with pieces of metal originating from the ship. By the looks of things the tunnel links the Crew Quarters with this cave.',
	choices: [
		{
			text:'Back to the cave intersection',
			index: 6
		},
		{
			text: 'Proceed into the hull breach',
			index: 12
		},
	]
},
{
	title:'Ship Interior', //8
	text:'You stand in the entrance lobby of the ship. Behind is a staircase going up and down, likely leading to the other entrances of the ship. Ahead will be the main section of the ship and an escape from this cursed planet ',
	choices: [
		{
			text:'Proceed deeper into the ship',
			index: 11
		},
		{
			text:'Go up the stairs',
			index: 7
		},
		{
			text: 'Go down the stairs',
			index: 9
		},
	]
},
{
	title:'Ship Hallway', //11
	text:'You walk down the hallway towards the main section of the ship. Pipes and wires dangling and strewn everywhere from the crash. ',
	choices: [
		{
			text:'Search the hallway',
			index: 19
		},
		{
			text: 'Go back to ship entrance',
			index: 8
		},
		{
			text: 'Walk towards the main section of the ship',
			index: 13
		},
	]
},
{
	title:'Search the hallway', //19
	text:'Searching the hallway, you find a dead body of a guard leaning up against one of the walls. With him is a functioning weapon on the ground. While slightly rusty, it will certainly pack a punch against any foe.',
	choices: [
		{
			text:'Go back to hallway',
			index: 11
		},
	]
},
{
	title:'Ship Main', //13
	text:'After walking for some time, you finally arrive at the main section of the ship. This used to be a relaxing plaza, now it is a derelict ruin, with everything slowly being taken over by nature. Ahead of you is a large and still very intact door. Behind it is the ship’s core, containing the hyperdrive and shuttle with that being your most likely chance of escaping. Opening requires control of the bridge which is also locked.',
	choices: [
		{
			text:'Go back to hallway',
			index: 11
		},
	]
},
{
	title:'Crew Quarters', //12
	text:'You slowly creep into the crew quarters, what is immediately noticeable is the various bodies spread around the room. Your crew members obviously didn’t have a chance to escape before the crash happened. You decide to focus on survival first before thinking about the dead.',
	choices: [
		{
			text:'Go through hull breach',
			index: 10
		},
		{
			text: 'Go back to the Main plaza',
			index: 10
		},
		{
			text:'Search crew quarters',
			index: 21
		},
	]
},
// {
// 	title:'Search crew quarters', //21
// 	text:'You look among the bodies, knowing that something of use will be here. Sure enough you find a keycard with enough clearance for the bridge. ',
// 	choices: [
// 		{
// 			text:'',
// 			index:
// 		},
// 	]
// },
]
