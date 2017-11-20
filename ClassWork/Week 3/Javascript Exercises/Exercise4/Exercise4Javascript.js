function CreatePlayer()
{
  //PlayerName
  var playername = document.getElementById('playername').value;
  document.getElementById('name').innerHTML = playername;

  //PlayerColour
  var playercolour = document.getElementById('playercolour').value;
  document.getElementById("colour").style.backgroundColor = playercolour;

  //playerhealth
  var playerhealth = document.getElementById('playerhealth').value;
  document.getElementById("health").innerHTML = playerhealth;

  //Playerweapon
  var Playerweapon = document.getElementById('Playerweapon').value;

  if (Playerweapon == 1)
  {
  Playerweapon = 1;
  }

  else if (Playerweapon  == 2)
  {
  Playerweapon = 2;
  }

  else {weapon = 3}

    document.getElementById("weapon").innerHTML = Playerweapon;
}
