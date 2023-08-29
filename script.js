// Task
// *Create a webpage with 16x16 square divs*
// Use js to make the divs
// Put them inside another container
// Make them appear as a grid, hint (flexbox)
// Add a hover effect; grid color when mouse hovers on them.
// How to change color:
//  1.) Using CSS
//  2.) Using JS i.e The drum kit example
// *Add a button at the top of the screen which will use a pop up, asking for the
// the No. of squares per side for the new grid. Set a limit a user can input i.e 100
// -------------------------------- ** Extra ** --------------------------------------------
// Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value entirely.
// Additionally, implement a progressive darkening effect where each interaction
//  adds 10 % more black or color to the square.
//  The objective is to achieve a completely black square only after ten interactions.

// get the container
const container = document.querySelector(".container");

// get the button
const btnChangeGrid = document.querySelector(".change-grid");


// event listener
btnChangeGrid.addEventListener("click", () => {
    let newGrid = prompt("How many squares per side?")
    container.replaceChildren()
    changeGrid(newGrid)
})


// append to the container
let changeGrid = function (n) {

    return n > 100 ? alert("Cannot input more than 100") : createGrid(n)
    
}

function createGrid(n) {
    // create a div
    // const div = createDiv()
    container.style.width = `${n * 32}px`;
    container.style.height = `${n * 32}px`;

    for (let i = 0; i < n*n; i++)
    {        
        createDiv()
    }
}

function createDiv() {
    let square = document.createElement("div");   
    let changeBlackCounter = 10;
    square.classList.add("grid");
    container.appendChild(square);

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = randomColor(changeBlackCounter);
        changeBlackCounter +=10;
     
    });
    
    square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "white"

    });
    return square
}

let randomColor = function (n) {
    let black = Math.floor(Math.random() * 255)
    // console.log("----", black, n)
    // black *= (100+n)/100
    // console.log(black)
    let green = Math.floor(Math.random() * 255)
    let red = Math.floor(Math.random() * 255) 
    return `rgb(${red}, ${green}, ${black})`
}
changeGrid(16);