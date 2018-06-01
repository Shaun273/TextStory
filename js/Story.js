// Initialization

var MoveCount = 25+1;
var FoundKey =  false;
var Enter = false;
var Direction = [0,0,0,0];
var i;
var ChangedRooms = false;
var finnished = false;


var size_of_arr_x = 7;
var size_of_arr_y = 4;

var StartingPos = [3,3];
var x = StartingPos[0];
var y = StartingPos[1];

KeyPositionx = Math.floor(Math.random() * size_of_arr_x+1);
KeyPositiony = Math.floor(Math.random() * size_of_arr_y+1);

// Room array troubles

//
// var temp = Array(size_of_arr_x).fill(new Object(0));
// var Room_Obj_item1 = Array(size_of_arr_y).fill(temp);
// var temp = Array(size_of_arr_x).fill(new Object(0));
// var Room_Obj_item2 = Array(size_of_arr_y).fill(temp);
// var temp = Array(size_of_arr_x).fill(new Object(false));
// var Room_Obj_item1use = Array(size_of_arr_y).fill(temp);
// var temp = Array(size_of_arr_x).fill(new Object(false));
// var Room_Obj_item2use = Array(size_of_arr_y).fill(temp);
// var temp = Array(size_of_arr_x).fill(new Object(false));
// var Room_Obj_north = Array(size_of_arr_y).fill(temp);
// var temp = Array(size_of_arr_x).fill(new Object(false));
// var Room_Obj_east = Array(size_of_arr_y).fill(temp);
// var temp = Array(size_of_arr_x).fill(new Object(false));
// var Room_Obj_south = Array(size_of_arr_y).fill(temp);
// var temp = Array(size_of_arr_x).fill(new Object(false));
// var Room_Obj_west = Array(size_of_arr_y).fill(temp);
//
// var temp = Array(size_of_arr_x).fill(false);
// var visited = Array(size_of_arr_y).fill(temp);

var Room_Obj_item1 = (new Array(size_of_arr_y)).fill().map(function(){ return new Array(size_of_arr_x).fill(0);});
var Room_Obj_item2 = (new Array(size_of_arr_y)).fill().map(function(){ return new Array(size_of_arr_x).fill(0);});
var Room_Obj_item1use = (new Array(size_of_arr_y)).fill().map(function(){ return new Array(size_of_arr_x).fill(false);});
var Room_Obj_item2use = (new Array(size_of_arr_y)).fill().map(function(){ return new Array(size_of_arr_x).fill(false);});
var Room_Obj_north = (new Array(size_of_arr_y)).fill().map(function(){ return new Array(size_of_arr_x).fill(false);});
var Room_Obj_east = (new Array(size_of_arr_y)).fill().map(function(){ return new Array(size_of_arr_x).fill(false);});
var Room_Obj_south = (new Array(size_of_arr_y)).fill().map(function(){ return new Array(size_of_arr_x).fill(false);});
var Room_Obj_west = (new Array(size_of_arr_y)).fill().map(function(){ return new Array(size_of_arr_x).fill(false);});
var visited = (new Array(size_of_arr_y)).fill().map(function(){ return new Array(size_of_arr_x).fill(false);});

// the following Comment is my attempt to manually create a 4x7 object array, but for some reason it only created 14 objects. Instead, as you can see above, I have seperated the object array into 9 different arrays of the same size. In order to make it work.
// The reason I had to create the objects indivitually was because some objects created in an iterative manner would share the same referances, and when values were changed, they would change the value for multiple objects in the array. Apparently this can be solved useing JSON, however, my effort using this method proved fruitless.

// var Room_Obj = [
//   [{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   }]
//   [{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   }],
//   [{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   }],
//   [{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   },{
//     item1 : 0,
//     item2 : 0,
//     item1use : false,
//     item2use : false,
//     north : false,
//     east : false,
//     south : false,
//     west : false,
//     visited :false
//   }]
// ] // Above is the array of objects need defining individually, otherwise referances to same object occur in multiple places in the array.

// below is where I tried to use the iterative method to create the array of room objects.

// var Room_Obj = [];
// var blankYArray = [];
//
// blankYArray.push(new Object({
//   item1 : 0,
//   item2 : 0,
//   item1use : false,
//   item2use : false,
//   north : false,
//   east : false,
//   south : false,
//   west : false,
//   visited :false
// }));
// var blankYArray = [];

// Here i tried using the JSON stringify and parse method to try to create a new array without attached referances. Needless to say, it didn't work

// for (var r = 0; r<size_of_arr_x;r++){
//   for (var t = 0; t< size_of_arr_y; t++){
//     blankYArray.push(JSON.parse(JSON.stringify(blankYArraysolo)))
//
//   // var tempArray = JSON.parse(JSON.stringify(blankYArray));
//   }
//   var tempArray = JSON.parse(JSON.stringify(blankYArray));
//   Room_Obj.push(tempArray);
// }
// for (var r = 0; r<size_of_arr_x;r++){
//   for (var t = 0; t< size_of_arr_y; t++){
//
//     blankYArray.push(new Object({
//       item1 : 0,
//       item2 : 0,
//       item1use : false,
//       item2use : false,
//       north : false,
//       east : false,
//       south : false,
//       west : false,
//       visited :false
//     }));
//
//   // var tempArray = JSON.parse(JSON.stringify(blankYArray));
//   }
//   // var tempArray = JSON.parse(JSON.stringify(blankYArray));
//   Room_Obj.push(blankYArray);
// }

// var temp = Array(size_of_arr_x).fill("");
// var ChoiceString = Array(size_of_arr_y).fill(temp);
var ChoiceString = (new Array(size_of_arr_y)).fill().map(function(){ return new Array(size_of_arr_x).fill("");});

var ChoiceScript ;
// console.log(Room_Obj);

var Item_Obj = Array(8).fill({});
 // The array of possible obects that can be found and interacted with. See line 469 for 50/50 chance of item being interactable. Also see line 396 for the random picking of the item that finds the key and wins the game.
Item_Obj[0] = {name: "Bookcase", solution:"On inspection of the Bookcase, you find an odd book that doesn't move. Until you pull it a bit harder and hear a click...\n\nIt reveals a hidden room."};
Item_Obj[1] = {name: "Table", solution:"On closer inspection of the Table, you find a panel with a button underneath. You push it a bit harder and hear a click...\n\nIt reveals a hidden room."};
Item_Obj[2] = {name: "Carpet", solution:"On closer inspection of the Carpet, you find a trap door underneath it. You open the door and it reveals a hidden room."};
Item_Obj[3] = {name: "Chair", solution:"On closer inspection of the Chair, you find a panel with a small lever underneath it. You pull it and hear a click...\n\nIt reveals a hidden room."};
Item_Obj[4] = {name: "Piano", solution:"On closer inspection of the Piano, you find a few keys that are attached to a mechanism. After a while playing the keys in different orders, you finally get the right combination and hear a click...\n\nIt reveals a hidden room."};
Item_Obj[5] = {name: "Book", solution:"On closer inspection of the Book, you find it is actually hollowed out and there is a button inside. You push it and hear a click...\n\nIt reveals a hidden room."};
Item_Obj[6] = {name: "Globe of the world", solution:"When you inspect the Globe you look around it while wondering where on earth you are. You find several locations with slightly raised sections, when you push all 4 locations in, you hear a click... It reveals a Hidden room."};
Item_Obj[7] = {name: "Lightswitch", solution:"On closer inspection of the Lightswitch, you find one too many switches. After figuring out which switch is the odd one out, you flick it and hear a click...\n\nIt reveals a hidden room."};
Item_Obj[8] = {name: "Candle", solution:"On closer inspection of the Candle holster, you find you're able to pull it. When you pull ot fully down you hear a click...\n\nIt reveals a hidden room."};

numofItems = Item_Obj.length;

var LuckyKeyNumberItem = Math.floor(Math.random() * numofItems);

var Num_items = 2;
var Room_Intro = {
  item1:Math.floor(Math.random() * numofItems),
  item2:Math.floor(Math.random() * numofItems),
  north: true,
  east: false,
  south: false,
  west: false,
  visited:true,

}
// console.log(Room_Obj);
// for (r = 0; r<size_of_arr_x;r++){
//   for (t = 0; t< size_of_arr_y; t++){
//     Room_Obj[t][r] = {
//       item1:0,
//       item2:0,
//       item1use:false,
//       item2use:false,
//       north: false,
//       east: false,
//       south: false,
//       west: false,
//       visited:false
//     }
//   }
// };
// console.log(Room_Obj);

// End of Initialization

// Prompt for name
var YourName = prompt("What is your first name?", "Bob")
if (YourName == null){exit(location.reload())} // if cancel is pressed, it will exit the long script.
while (typeof YourName != "string") {

  YourName = prompt("What is your first name?", "Bob");
  if (what_to_do == null){exit(location.reload())}
}
// console.log(YourName);

// Scripts for story

var LifeMessage = ("The year is 2020. "+YourName+" is an acomplished Software Consultant. They have built up a sucessful reputation with companies due a tenacity and drive that is uncommon in the modern populace.\nThey even have two wondeful children called Sophie and Nathan. Aged 2 and 4.\n\nThey were living a pleasantly normal life...");
var EverythingChanged_alert = "Everything changed when the fire nation...eRR0rrrrr.. \n\n.....Error:Wr0N8.5t02Y..\n\nRecalibratiing...\n\n..........................";
var ErrorMsg_alert = ("Everything changed one day when "+YourName+" was walking home alone down a dark alley...");
var WalkingAlone = "*BANG*\n\n*CRACK*";
var MansionIntroMessage_alert = ("...After an undefined amount of time you wake up in a long, dark room with a steel door.\n\n Without a sense of time or even any idea of where you are, immediately -after picking yourself up from the hard floor- you run to the door. Clinging to the idea of finding out anything about your current situation.\n\nYour hope rises, feeling the slight touch of a breeze coming from beneath it.");
var MansionIntroMessage2_alert = ("Unfortunately, it wasn't meant to be. The door is looked, your only clue to getting out is the strange looking key hole in the door. And a timer above the door with "+MoveCount+" minutes on it that is slowly ticking down.");
var MansionIntroMessage3_alert = "After wollowing in self pity and throwing out profanity that your kids would be traumatised by, you regain some composure.\n\nYou realise, you're a strong independent person that 'dont need no key', and besides, you haven't got the time for a tantrum. So you promptly begin to explore the rest of your room. Assuming it wouldn't lead no-where, right???";
var MansionIntroMessage4_alert = ("Walking around in the dark you find "+Num_items+" strange looking objects.\n\nFirst is an odd looking "+Item_Obj[Room_Intro.item1].name+". \nThe second is a strange "+Item_Obj[Room_Intro.item2].name+ ".\n\nThankfully you also find a second door at the far end of the room marked with an N! You assume the N means that that direction is north.");
var WhatToDoIntro_Prompt = ("Do you want to: \n\n1. Invesigate the "+Item_Obj[Room_Intro.item1].name+"?\n2. Invesigate the "+Item_Obj[Room_Intro.item2].name+"?\n3. Go through the northen door?\n\nType the option number and hit enter to choose..");
var Onwards = "You head through the North door into the dark, unsure of what you will find."
var KeyString = "After a thorough search of the hidden room you find a small ornamental box. When you look inside, relief washes over you. You've found the key and can finally see the sun again!"
var Congratulations = "CONGRATULATIONS!! You've found the Key and can now escape the maze of a Mansion! And you did it with "+MoveCount+" moves to spare!";
var OutOfMoves = "*CLANG* \n\nAfter all your struggles and desperate attempts to find the key and escape, you start to get lost and go crazy in the reppetition of the maze of rooms.\n\nLittle did they know, back at the entrance, that clang was the sound of the exit being shut off forever.\nFortunately it has escaped, "+YourName+"'s notice, who will likely spend the rest of their lives slowly going mad while clinging on to the hope of escaping their claustraphobia. \n\nUnfortunately they will never again able to see their children, children who will forever resent them for leaving... :( "
var UselessItem = "Unfortunately, after a while trying to work the item, nothing happens. You eventually give up and continue to try and find a way out...";
var DirectionsString = ["3. A door leading North\n","4. A door leading East\n","5. A door leading South\n","6. A door leading West\n"]
var NewRoom = ("After going through the door, you find a similar situation again. You find:\n");
var PromptMsg = "\nType the option number and hit enter to choose..";
var HiddenRoom = "You have found a hidden passage, would you like to use it to go to a random room in the mansion? WARNING: You will not be able to come back through the passage."
var Invalid = "That is an invalid option."
// End of scripts


// functions;
function GenRoom(x,y) { //Generates the items and options available for the current room the user is in.
  if (visited[y][x]==false){
    Room_Obj_item1[y][x] = Math.floor(Math.random() * numofItems); // random item out of the choices in the Item_obj array
    Room_Obj_item2[y][x] = Math.floor(Math.random() * numofItems); // random item out of the choices in the Item_obj array

    Room_Obj_item1use[y][x] = Math.random() >= 0.5; // random 50/50 chance of each item being useful
    Room_Obj_item2use[y][x] = Math.random() >= 0.5;

    for (a = 0;a<4;a++) {
      direction(x,y,a); // direction is the function that works out which rooms are attached the the current one
                        // and hence which directions the user can go from this room. The directions are saved for each room.

    }
  } else {

  }
  // return not required as the values are recorded in the several arrays.
}

function direction(x,y,a) { // direction is the function that works out which rooms are attached the the current one
                            // and hence which directions the user can go from this room.
  switch (a) {              // switch case statement, which is why the function will be called 4 times for each room, once
                            // for each direction. See the for loop on line 472.
    case 0:
    // console.log(typeof Room_Obj[x,[y+1]]);
      if (y<= 0 ) {       // simple rectangular layout of the room makes these calculations simple.
                                      // however if you wanted a more complicated layout, these conditions need to be changed
                                      // to detect the existance of an adjacent object in the Room_Obj array.
        Room_Obj_north[y][x] = false;
      } else {
        Room_Obj_north[y][x] = true;
      };
      break;
    case 1:
      if (x>=size_of_arr_x-1) {
      Room_Obj_east[y][x] = false;
      } else {
        Room_Obj_east[y][x] = true;
      }
      break;
    case 2:
      if (y>=size_of_arr_y-1 ) {
      Room_Obj_south[y][x] = false;
      } else {
        Room_Obj_south[y][x] = true;
      };
      break;
    case 3:
      if (x<=0) {
      Room_Obj_west[y][x] = false;
      } else {
        Room_Obj_west[y][x] = true;
      }
      break;
  }
}

// var choices = {
//   item1:true,
//   item2:true,
//   north:true,
//   east:false,
//   south:false,
//   west:false
//
// };

function ChoiceScrpt(x,y) {     // this function simply reads which choices are available for the current room and temporarily saves a cut down script of options available, Move on to line 564, the GenString function, and the calling of the function for the output that the user would see and the saving of it.
  ChoiceScript = [   // PLEASE  NOTE: The slight difference in the name of the function and the array.. omission of the 'i'
  ("1. An odd "+Item_Obj[Room_Obj_item1[y][x]].name+"\n"),
  ("2. A strange "+Item_Obj[Room_Obj_item2[y][x]].name+"\n")];
  i = 2;
  if (Room_Obj_north[y][x] == true) {

    ChoiceScript[i] = DirectionsString[0];
    i = i+1;
  } else {
  }
  if (Room_Obj_east[y][x] == true) {

    ChoiceScript[i] = DirectionsString[1];
    i = i+1;
  } else {
  }
  if (Room_Obj_south[y][x] == true) {

    ChoiceScript[i] = DirectionsString[2];
    i = i+1;
  } else {
  }
  if (Room_Obj_west[y][x] == true) {

    ChoiceScript[i] = DirectionsString[3];
    i = i+1;
  } else {
  }


}

function GenString(x,y) {     // this function combines the array of strings in ChoiceScript along with two premade scripts in a coherant way that is ready for output. These strings are saved in an array of strings to keep incase the user revisits a room.
  if (visited[y][x] == false) { // if the user has already visited the active room, the combination of the strings doesnt happen and the output is simply recalled
    ChoiceString[y][x] = NewRoom;

    for (var i = 0; i < ChoiceScript.length; i++) {

      ChoiceString[y][x] = (ChoiceString[y][x]+ChoiceScript[i]);

    }
    ChoiceString[y][x] = ChoiceString[y][x]+PromptMsg;
    console.log(visited[y][x]);
    console.log(ChoiceString[y][x]);
    return ChoiceString[y][x];
  } else {
    console.log(visited[y][x]);
    console.log(ChoiceString[y][x]);
    return ChoiceString[y][x];
  }
  // console.log(visited[y][x]);
  // console.log(ChoiceString[y][x]);
  // return ChoiceString[y][x];

}

// End of functions



// Story time:

// Intro..
// prompting of name needs to be before the creation of scripts. Otherwise it would also be in this section

alert(LifeMessage);
alert(EverythingChanged_alert);
alert(ErrorMsg_alert);
alert(WalkingAlone);
alert(MansionIntroMessage_alert);
alert(MansionIntroMessage2_alert);
alert(MansionIntroMessage3_alert);


// The intro is designed to give the user an idea of what to expect in the rest of the mansion without any consequences.

while (confirm("Do you want to brave the dark and find what awaits you??") == false) {
  if (confirm("Thats a shame.. Are you sure?")==true){exit()}
}
alert(MansionIntroMessage4_alert);

var what_to_do = prompt(WhatToDoIntro_Prompt);
if (what_to_do == null){exit(location.reload())} // again if the user presses cancel, they can stop the script running.

while (what_to_do != 3){
  if (what_to_do == 1 || what_to_do == 2) {
    alert(UselessItem);
    what_to_do = prompt(WhatToDoIntro_Prompt);
    if (what_to_do == null){exit(location.reload())}

  } else {
    alert(Invalid);
    what_to_do = prompt(WhatToDoIntro_Prompt);
    if (what_to_do == null){exit(location.reload())}

  }

}
alert(Onwards);
x = StartingPos[0];
y = StartingPos[1];

// End of Intro

// Main Loop and Story/Maze

while (FoundKey==false && MoveCount > 0) {
console.log(x);
console.log(y);

// another room, you find: 2 items, n exits. string.
// which do you pick? prompt
// based on choice, move room or repeat/interact with item
  if (!visited[y][x]) {
    GenRoom(x,y);
    ChoiceScrpt(x,y);
    console.log("room gen has ran");
  }
  what_to_do = prompt("You have "+MoveCount+" moves remaining. \n"+GenString(x,y));
  if (what_to_do == null){exit(location.reload())}
  // console.log(what_to_do);
  what_to_do = parseInt(what_to_do);
  visited[y][x] =true;
  while (what_to_do < 1 || what_to_do > 6 || typeof what_to_do != "number" ){
    alert(Invalid);
    what_to_do = prompt("You have "+MoveCount+" moves remaining. \n"+GenString(x,y));
    if (what_to_do == null){exit(location.reload())}
    what_to_do = parseInt(what_to_do);
  }
  while (what_to_do < 3 && what_to_do > 0){
    if (what_to_do == 1 && Room_Obj_item1use[y][x] == true) {
      alert(Item_Obj[Room_Obj_item1[y][x]].solution);
      MoveCount = MoveCount-1;
      if (Room_Obj_item1[y][x] == LuckyKeyNumberItem) {

        FoundKey = true;
        what_to_do = 999;
      }
      else if (confirm(HiddenRoom) != false) {
        // x = Math.floor(Math.random() * size_of_arr_x+1);
        // y = Math.floor(Math.random() * size_of_arr_y+1);
        alert("Upon emerging from the passage you find yourself in another one of the mansion's rooms.");
        ChangedRooms = true;
        what_to_do = 999;

      } else {
        alert("You return from the hidden room.")
        what_to_do = prompt("You have "+MoveCount+" moves remaining. \n"+GenString(x,y));
        if (what_to_do == null){exit(location.reload())}
        what_to_do = parseInt(what_to_do);
      }

    } else if (what_to_do == 2 && Room_Obj_item2use[y][x]) {
      alert(Item_Obj[Room_Obj_item2[y][x]].solution)
      MoveCount = MoveCount-1;
      if (Room_Obj_item2[y][x] == LuckyKeyNumberItem) {

        FoundKey = true;
        what_to_do = 999;
      } else if (confirm(HiddenRoom) != false){

        alert("Upon emerging from the passage you find yourself in another one of the mansion's rooms.");
        ChangedRooms = true;
        what_to_do = 999;
        } else {
          alert("You return from the hidden room.")
          what_to_do = prompt("You have "+MoveCount+" moves remaining. \n"+GenString(x,y));
          if (what_to_do == null){exit(location.reload())}
          what_to_do = parseInt(what_to_do);
        }
    } else {
      alert(UselessItem);
      MoveCount = MoveCount-1;
      what_to_do = prompt("You have "+MoveCount+" moves remaining. \n"+GenString(x,y));
      if (what_to_do == null){exit(location.reload())}

    }
  }
  // console.log("before", Room_Obj);
  if (what_to_do == 3 && Room_Obj_north[y][x]) {
    y = y-1;
    MoveCount = MoveCount-1;
    alert("You choose to move though the north door.")
  } else if (what_to_do == 4 && Room_Obj_east[y][x]) {
    x = x+1;
    MoveCount = MoveCount-1;
    alert("You choose to move though the east door.")
  } else if (what_to_do == 5 && Room_Obj_south[y][x]) {
    y = y+1;
    MoveCount = MoveCount-1;
    alert("You choose to move though the south door.")
  } else if (what_to_do == 6 && Room_Obj_west[y][x]) {
    // if (x < -0) {
    x = x-1;
    MoveCount = MoveCount-1;
    alert("You choose to move though the west door.")
    // }
  } else if (ChangedRooms) {
    x = Math.floor(Math.random() * size_of_arr_x);
    y = Math.floor(Math.random() * size_of_arr_y);


  } else {
    alert(Invalid)
  }
  // console.log("after", Room_Obj);
}
if (FoundKey == true) {
  alert(KeyString);
  alert(Congratulations);
} else if (MoveCount<= 0 ) {
  alert(OutOfMoves)
}
