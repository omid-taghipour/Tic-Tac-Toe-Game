// Getting the button
let button = document.querySelector("#b");

// Getting all the table cells
let cells = document.querySelectorAll("td");

// Creating a function to clean the table
function clean_Table(){
    for(var i = 0; i < cells.length; i++){
        cells[i].innerHTML = "";
    }
}

// Adding event on the button
button.addEventListener('click', clean_Table);

// Creating a function to change the values in a cell
function change_value(){
    if(this.innerHTML === ""){
        this.innerHTML = "X";
    } else if(this.innerHTML === "X"){
        this.innerHTML = "O";
    } else{
        this.innerHTML = "";
    }
}

// Adding event on all the cells
cells.forEach((cell) => {
    cell.addEventListener("click", change_value);
});