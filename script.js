const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

let i = 1;
// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    
    newDiv.classList.add(color);
    newDiv.setAttribute('id', i ) // Adds a unique id to each div to compare to make sure 
    i++; // add to the i 
    sessionStorage.setItem( i, color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}let clickArray = [];
let clickArrayId = [];
// TODO: Implement this function!
function handleCardClick(event) {

  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);



  event.target.style.background = event.target.className;


clickArray.push(event.target.className);
clickArrayId.push(event.target.id)
if (clickArray[0] === clickArray[1] && clickArrayId[0] !== clickArrayId[1])  {

console.log("Match!")

clickArray = [];
clickArrayId = [];
}else if (clickArray.length === 2){

   setTimeout(() => {
     document.getElementById(clickArrayId[0]).style.backgroundColor = "white"; //Trying to set a timer on divs by Id
     document.getElementById(clickArrayId[1]).style.backgroundColor = "white";
     clickArray = [];
     clickArrayId = [];
     
   }, 1000);




}else if( clickArray > 2 ) {
  return;
}



   
}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */