var br2 = [
               [1 , 2],
               [3 , 4]
];


//Definition of dining room
alert(`You are now in the second bedroom, in space 4. \n The room layout is diagramed below: \n${br2[0][0]} , ${br2[0][1]} \n${br2[1][0]} , ${br2[1][1]}`);

//move1
var move1 = prompt(`Enter a direction (u, d, l, or r). \n The room layout is diagramed below: \n${br2[0][0]} , ${br2[0][1]} \n${br2[1][0]} , ${br2[1][1]} \n Hint: The correct path is one of the two area codes in Manitoba, Canada (Look it up on another device).`);
 
if (move1 == 'l') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 3 and closer to the door. \n The room layout is diagramed below: \n${br2[0][0]} , ${br2[0][1]} \n${br2[1][0]} , ${br2[1][1]}.`);
//Wrong path
 
//Wall 
} else if (move1 == 'd' || move1 == 'u' || move1 == 'r') {
  alert("You've hit a wall or are on the wrong path! Try again.");
 
  var move1b = prompt(`Enter a direction (u, d, l, or r). \n The room layout is diagramed below: \n${br2[0][0]} , ${br2[0][1]} \n${br2[1][0]} , ${br2[1][1]} \n Hint: The correct path is one of the two area codes in Manitoba, Canada (Look it up on another device).`);
 
    if (move1b == 'l') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 3 and closer to the door. \n The room layout is diagramed below: \n${br2[0][0]} , ${br2[0][1]} \n${br2[1][0]} , ${br2[1][1]}.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//move2
var move2 = prompt(`You are in space 3. Enter a direction (u, d, l, or r). \n The room layout is diagramed below: \n${br2[0][0]} , ${br2[0][1]} \n${br2[1][0]} , ${br2[1][1]} \n Hint: The correct path is one of the two area codes in Manitoba, Canada (Look it up on another device).`);
 
if (move2 == 'u') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 1 and have found the exit to the house.`);
//Wrong path
 
//Wall 
} else if (move2 == 'd' || move2 == 'l' || move2 == 'r') {
  alert("You've hit a wall or are on the wrong path! Try again.");
 
  var move2b = prompt(`Enter a direction (u, d, l, or r). \n The room layout is diagramed below: \n${br2[0][0]} , ${br2[0][1]} \n${br2[1][0]} , ${br2[1][1]} \n Hint: The correct path is one of the two area codes in Manitoba, Canada (Look it up on another device).`);
 
    if (move2b == 'u') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 1 and have found the exit to the house.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}

alert("Congratulations, you won the game! Thanks for playing.")




