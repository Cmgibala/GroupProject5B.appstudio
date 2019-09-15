var br1 = [
               [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]
];
 

// Entry-Way Room Layout
alert(`You are now in the first bedroom in space 8. The room layout is diagramed below: \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}.`);
 
//move1
var move1 = prompt(`Enter a direction (u, d, l, or r). \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}. \n Hint: The correct path for this room is also the zip code of San Simon, AZ (look it up on a different device).`);
 
if (move1 == 'u') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 5 and closer to the door. \n The room layout is diagramed below: \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}.`);
//Wrong path
 
//Wall 
} else if (move1 == 'l' || move1 == 'd' || move1 == 'r') {
  alert("You've hit a wall or are on the wrong path! Try again.");
  var move1b = prompt(`Enter a direction (u, d, l, or r). \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}. \n Hint: The correct path for this room is also the zip code of San Simon, AZ (look it up on a different device).`);
 
    if (move1b == 'u') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 5 and closer to the door. \n The room layout is diagramed below: \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Move 2
alert(`You are now in space 5. The room layout is diagramed below: \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}.`);
 
//move1
var move2 = prompt(`Enter a direction (u, d, l, or r). \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}. \n Hint: The correct path for this room is also the zip code of San Simon, AZ (look it up on a different device).`);
 
if (move2 == 'r') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 6 and closer to the door. \n The room layout is diagramed below: \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}.`);
//Wrong path
 
//Wall 
} else if (move2 == 'l' || move2 == 'd' || move2 == 'u') {
  alert("You've hit a wall or are on the wrong path! Try again.");
  var move2b = prompt(`You are in space 5. Enter a direction (u, d, l, or r). \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}. \n Hint: The correct path for this room is also the zip code of San Simon, AZ (look it up on a different device).`);
 
    if (move2b == 'r') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 6 and closer to the door. \n The room layout is diagramed below: \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Move 3
alert(`You are now in space 6. The room layout is diagramed below: \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}.`);
 
//move1
var move3 = prompt(`Enter a direction (u, d, l, or r). \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}. \n Hint: The correct path for this room is also the zip code of San Simon, AZ (look it up on a different device).`);
 
if (move3 == 'u') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 3 and closer to the door. \n The room layout is diagramed below: \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}.`);
//Wrong path
 
//Wall 
} else if (move3 == 'l' || move3 == 'd' || move3 == 'r') {
  alert("You've hit a wall or are on the wrong path! Try again.");
  var move3b = prompt(`You are in space 6. Enter a direction (u, d, l, or r). \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}. \n Hint: The correct path for this room is also the zip code of San Simon, AZ (look it up on a different device).`);
 
    if (move3b == 'u') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 3 and closer to the door. \n The room layout is diagramed below: \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Move 4
alert(`You are now in space 3. The room layout is diagramed below: \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}.`);
 
//move4
var move4 = prompt(`Enter a direction (u, d, l, or r). \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}. \n Hint: The correct path for this room is also the zip code of San Simon, AZ (look it up on a different device).`);
 
if (move4 == 'l') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 2 and have found the door. \n`);
//Wrong path
 
//Wall 
} else if (move4 == 'u' || move4 == 'd' || move4 == 'r') {
  alert("You've hit a wall or are on the wrong path! Try again.");
  var move1b = prompt(`You are in space 6. Enter a direction (u, d, l, or r). \n ${br1[0][0]} , ${br1[0][1]} , ${br1[0][2]} \n ${br1[1][0]} , ${br1[1][1]} , ${br1[1][2]} \n ${br1[2][0]} , ${br1[2][1]} , ${br1[2][2]}. \n Hint: The correct path for this room is also the zip code of San Simon, AZ (look it up on a different device).`);
 
    if (move4b == 'l') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 2 and have found the door. \n`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}
