/*
Create a new appStudio project named Portfolio_TeamX.
You will be creating a complete, text-based game named The Big Adventure. It is kind of like the angry birds activities you did, with the birds walking down paths. But here, your user is walking through rooms in a house and has to visit all of them to 'win'. The user has to move by giving the system input commands to move, read where the system tells her she is, and depend on descriptions of rooms (eg. to know if she has been in that room or not). All  things the user can't see. Basically think about playing Angry Birds with just a text interface. 

Scenario: Your program lets users move through rooms in a ranch house (all one level) based on their input. Users can get descriptions of each room they are in. The goal is to visit all six rooms. You can configure house layout any way you like. 
You will have to decide on the directions in which the user can move, how you will keep track of how far the user has moved within a room, which rooms she has visited and not visited, which room she is currently in, where in the room she is, etc.You'll have to output descriptions of this information for the user as she moves about since this is not a visual game. Also, you'll have to set the limits on how far she can move (ie. virtual walls around the room based on the size of the room). So if a user wants to move 5 units forward and that would take them outside of the room, the program needs to tell them something like they can't move further in that direction. You can assume that the user makes no errors in their input (eg. types in an 'a' when a number is expected by the program). 

Example dialog might be: 
Computer: Would you like to play The Big Adventure? 
User: yes
Computer: There are 6 rooms you need to visit: [here make up and display your six room names like Game Room, TV Room, Activity Room, Red Room, etc]. You must visit each of the six rooms at least once to win the game. The program will not stop until you win. 
Computer: This is how you move: [give instructions on user input for movement] ......
Computer: Start now by giving me your first move. 
User: etc. .......

Hint: Start this Fixit by writing a rough algorithm (list of steps) of how the game will work. Then use it to pretend to play the game (without the computer). Get your ideas in place and working before you start coding. Doing it this way will seem to take longer since it delays coding, but in reality your coding goes muck faster and has fewer errors when you make a detailed plan first. 

Requirements
Use six rooms, each with its' own name and description
You must use at least one array, prompt, alert (talk to the user via alerts, to developers like yourselves with console.logs), if/else, switch, and template literal.
You will likely also use confirms, booleans, single variables.
Use a comment above any code blocks/units that are not entirely clear to explain in plain (and concise) English what they do.
Do not use any loops or functions (we haven't learned these yet). Just use code that we have learned to date.
On the Word doc, detail exactly what each user did for the portfolio (working individually, in pairs, etc is fin -just document). I will use this along with my observations and questions for you in class to adjust individual grades on this portfolio up or down.
Hand In: Submit one zipped team project.

*/

/*
confirm('Click \'OK\' to start game');
alert('Welcome to the game. \n Directions: \n You will be given a six room house and must move through the house space-by-space on a defined path to find the exit. You will be given riddles that will help you find the correct path. The inputs for the game are as follows: \n up (u), down (d), left (l), and right (r). \n Any other input will return an error.');

 
var entry = [
               [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]
];
 

// Entry-Way Room Layout
alert(`You will begin in the Entry-Way in space 1. The room layout is diagramed below: \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1][1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}.`);
 
//move1
var move1 = prompt(`Enter a direction (u, d, l, or r). \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1][1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}. \n Hint: The correct path for this room is also the postal code in Wyoming County, New York (look it up on a different device).`);
 
if (move1 == 'd') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 4 and closer to the door. \n The room layout is diagramed below: \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1][1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}.`);
//Wrong path
 
//Wall 
} else if (move1 == 'l' || move1 == 'u' || move1 == 'r') {
  alert("You've hit a wall or are on the wrong path! Try again.");
 
  var move1b = prompt(`Enter a direction (u, d, l, or r). \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1]   [1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}. \n Hint: The correct path for this room is also the postal code in Wyoming County, New York (look it up on a different device).`);
 
    if (move1b == 'd') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 4 and closer to the door. \n The room layout is diagramed below: \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1][1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}
 
 
 
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 
//Move 2
var move2 = prompt(`Move 2. You are on space 4. Enter a direction (u, d, l, or r). \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1][1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}. \n Hint: The correct path for this room is also the postal code in Wyoming County, New York (look it up on a different device).`);
 
if (move2 == 'r') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 5 and closer to the door. \n The room layout is diagramed below: \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1][1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}.`);
//Wrong path
 
//Wall 
} else if (move2 == 'l' || move2 == 'u' || move2 == 'd') {
  alert("You've hit a wall or are on the wrong path! Try again.");
 
  var move2b = prompt(`Enter a direction (u, d, l, or r). \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1]   [1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}. \n Hint: The correct path for this room is also the postal code in Wyoming County, New York (look it up on a different device).`);
 
    if (move2b == 'r') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 5 and closer to the door. \n The room layout is diagramed below: \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1][1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}
 
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 
//Move 3
var move3 = prompt(`Move 3. You are on space 5. Enter a direction (u, d, l, or r). \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1][1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}. \n Hint: The correct path for this room is also the postal code in Wyoming County, New York (look it up on a different device).`);
 
if (move3 == 'r') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 6 and closer to the door. \n The room layout is diagramed below: \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1][1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}.`);
//Wrong path
 
//Wall 
} else if (move3 == 'l' || move3 == 'u' || move3 == 'd') {
  alert("You've hit a wall or are on the wrong path! Try again.");
 
  var move3b = prompt(`Enter a direction (u, d, l, or r). \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1]   [1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}. \n Hint: The correct path for this room is also the postal code in Wyoming County, New York (look it up on a different device).`);
 
    if (move3b == 'r') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 6 and closer to the door. \n The room layout is diagramed below: \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1][1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 
//Move 4
var move4 = prompt(`Move 4. You are on space 6. Enter a direction (u, d, l, or r). \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1][1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}. \n Hint: The correct path for this room is also the postal code in Wyoming County, New York (look it up on a different device).`);
 
if (move4 == 'd') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 9 and have reached the door. You will now move on to the living room.`);
//Wrong path
 
//Wall 
} else if (move4 == 'l' || move4 == 'u' || move4 == 'r') {
  alert("You've hit a wall or are on the wrong path! Try again.");
 
  var move4b = prompt(`Enter a direction (u, d, l, or r). \n ${entry[0][0]} , ${entry[0][1]} , ${entry[0][2]} \n ${entry[1][0]} , ${entry[1]   [1]} , ${entry[1][2]} \n ${entry[2][0]} , ${entry[2][1]} , ${entry[2][2]}. \n Hint: The correct path for this room is also the postal code in Wyoming County, New York (look it up on a different device).`);
 
    if (move4b == 'd') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 9 and have reached the door. You will now move on to the living room.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}
 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
var living = [
               [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]
];
 
//Living Room Layout
alert(`You are now in the living room in space 3. The room layout is diagramed below: \n ${living[0][0]} , ${living[0][1]} , ${living[0][2]} \n ${living[1][0]} , ${living[1][1]} , ${living[1][2]} \n ${living[2][0]} , ${living[2][1]} , ${living[2][2]}.`);
 
//move1
var move1 = prompt(`Enter a direction (u, d, l, or r). \n ${living[0][0]} , ${living[0][1]} , ${living[0][2]} \n ${living[1][0]} , ${living[1][1]} , ${living[1][2]} \n ${living[2][0]} , ${living[2][1]} , ${living[2][2]} \n Hint: The door to the next room is located at the space representing the number of innings in a standard baseball game. Take the shortest path.`);
 
 
if (move1 == 'd') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 6 and closer to the door. \n The room layout is diagramed below: \n ${living[0][0]} , ${living[0][1]} , ${living[0][2]} \n ${living[1][0]} , ${living[1][1]} , ${living[1][2]} \n ${living[2][0]} , ${living[2][1]} , ${living[2][2]}.`);
//Wrong path
 
//Wall 
} else if (move1 == 'l' || move1 == 'u' || move1 == 'r') {
  alert("You've hit a wall or are on the wrong path! Try again.");
 
  var move1b = prompt(`Enter a direction (u, d, l, or r). \n ${living[0][0]} , ${living[0][1]} , ${living[0][2]} \n ${living[1][0]} , ${living[1][1]} , ${living[1][2]} \n ${living[2][0]} , ${living[2][1]} , ${living[2][2]}. \n Hint: The door to the next room is located at the space representing the number of innings in a standard baseball game. Take the shortest path.`);
 
    if (move1b == 'd') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 6 and closer to the door. \n The room layout is diagramed below: \n ${living[0][0]} , ${living[0][1]} , ${living[0][2]} \n ${living[1][0]} , ${living[1][1]} , ${living[1][2]} \n ${living[2][0]} , ${living[2][1]} , ${living[2][2]}.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Move 2
var move2 = prompt(`You are on space 6. Enter a direction (u, d, l, or r). \n ${living[0][0]} , ${living[0][1]} , ${living[0][2]} \n ${living[1][0]} , ${living[1][1]} , ${living[1][2]} \n ${living[2][0]} , ${living[2][1]} , ${living[2][2]} \n Hint: The door to the next room is located at the space representing the number of innings in a standard baseball game. Take the shortest path.`);
 
 
if (move2 == 'd') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 9 and have found the door. You will now move to the dining room and will start on space 2.`);
//Wrong path
 
//Wall 
} else if (move2 == 'l' || move2 == 'u' || move2 == 'r') {
  alert("You've hit a wall or are on the wrong path! Try again.");
 
  var move2b = prompt(`You are on space 6. Enter a direction (u, d, l, or r). \n ${living[0][0]} , ${living[0][1]} , ${living[0][2]} \n ${living[1][0]} , ${living[1][1]} , ${living[1][2]} \n ${living[2][0]} , ${living[2][1]} , ${living[2][2]}. \n Hint: The door to the next room is located at the space representing the number of innings in a standard baseball game. Take the shortest path.`);
 
    if (move2b == 'd') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 9 and have found the door. You will now move to the dining room and will start on space 2.`);
    }  else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var dining = [
               [1 , 2],
               [3 , 4]
];


//Definition of dining room
alert(`You are now in the dining room, in space 2. \n The room layout is diagramed below: \n${dining[0][0]} , ${dining[0][1]} \n${dining[1][0]} , ${dining[1][1]}`);

//move1
var move1 = prompt(`Enter a direction (u, d, l, or r). \n The room layout is diagramed below: \n${dining[0][0]} , ${dining[0][1]} \n${dining[1][0]} , ${dining[1][1]} \n Hint: The correct path can be found my multiplying 11 * 194`);
 
if (move1 == 'l') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 1 and closer to the door. \n The room layout is diagramed below: \n${dining[0][0]} , ${dining[0][1]} \n${dining[1][0]} , ${dining[1][1]}.`);
//Wrong path
 
//Wall 
} else if (move1 == 'd' || move1 == 'u' || move1 == 'r') {
  alert("You've hit a wall or are on the wrong path! Try again.");
 
  var move1b = prompt(`Enter a direction (u, d, l, or r). \n The room layout is diagramed below: \n${dining[0][0]} , ${dining[0][1]} \n${dining[1][0]} , ${dining[1][1]} \n Hint: The correct path can be found my multiplying 11 * 194`);
 
    if (move1b == 'l') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 1 and closer to the door. \n The room layout is diagramed below: \n${dining[0][0]} , ${dining[0][1]} \n${dining[1][0]} , ${dining[1][1]}.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//move2
var move2 = prompt(`You are now on space 1. Enter a direction (u, d, l, or r). \n The room layout is diagramed below: \n${dining[0][0]} , ${dining[0][1]} \n${dining[1][0]} , ${dining[1][1]} \n Hint: The correct path can be found my multiplying 11 * 194`);
 
if (move2 == 'd') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 3 and closer to the door. \n The room layout is diagramed below: \n${dining[0][0]} , ${dining[0][1]} \n${dining[1][0]} , ${dining[1][1]}.`);
//Wrong path
 
//Wall 
} else if (move2 == 'l' || move2 == 'u' || move2 == 'r') {
  alert("You've hit a wall or are on the wrong path! Try again.");
 
  var move2b = prompt(`Enter a direction (u, d, l, or r). \n The room layout is diagramed below: \n${dining[0][0]} , ${dining[0][1]} \n${dining[1][0]} , ${dining[1][1]} \n Hint: The correct path can be found my multiplying 11 * 194`);
 
    if (move2b == 'd') {
    //success condition
    alert(`You have chosen the correct path. You are now on space 3 and closer to the door. \n The room layout is diagramed below: \n${dining[0][0]} , ${dining[0][1]} \n${dining[1][0]} , ${dining[1][1]}.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}

/////////////////////////////////////////////////////////////////////////////
//move3
var move3 = prompt(`You are now on space 3. Enter a direction (u, d, l, or r). \n The room layout is diagramed below: \n${dining[0][0]} , ${dining[0][1]} \n${dining[1][0]} , ${dining[1][1]} \n Hint: The correct path can be found my multiplying 11 * 194`);
 
if (move3 == 'r') {
  //success condition
  alert(`You have chosen the correct path. You are now on space 4 and have found the door. You will now move on to the kitchen.`);
//Wrong path
 
//Wall 
} else if (move3 == 'l' || move3 == 'u' || move3 == 'd') {
  alert("You've hit a wall or are on the wrong path! Try again.");
 
  var move3b = prompt(`Enter a direction (u, d, l, or r). \n The room layout is diagramed below: \n${dining[0][0]} , ${dining[0][1]} \n${dining[1][0]} , ${dining[1][1]} \n Hint: The correct path can be found my multiplying 11 * 194`);
 
    if (move3b == 'r') {
    //success condition
      alert(`You have chosen the correct path. You are now on space 4 and have found the door. You will now move on to the kitchen.`);
    }
    else {
      alert("Error. You lost.");
    }
 
} else {
  alert("Error. You lost! :(");
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*Put kitchen here*/





//Bedroom 1
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

////////////////////////////////////////////////////////////////////////////////////////////
/*Bedroom 2*/


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


