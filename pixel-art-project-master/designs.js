// Inputs the width of the element
const gridWidthEl = document.getElementById("inputWidth");
// Inputs the height of the element
const gridHeightEl = document.getElementById("inputHeight");
// picks color of the element
const colorPickerEl = document.getElementById("colorPicker");
// Submit element
const submitEl = document.getElementById("submitInput");
// Elements of table
const tableEl = document.getElementById("pixelCanvas");

// Adds an event listener to the submit Querry
// this helps to call the makeGrid 
submitEl.addEventListener('click', (e) => {
    // Helps to prevent the form from default action
    e.preventDefault();
    // gets rid of the previous element in the table element
    tableEl.replaceChildren("");
    // Calls makeGrid function
    makeGrid();
});

// calls the makeGrid() method Whenever user enters a size
function makeGrid() {
    // this gets the height and width of the grid
    const heightOfGrid = gridHeightEl.value;
    const widthOfGrid = gridWidthEl.value;

    // This constructs the grid
    for(let a = 0; a < heightOfGrid; a++) {
        // Creation of a table row element
        const tr = document.createElement('tr');
        // Addition of a class name of container to the table row
        tr.classList.add('container');

        // For each square
        for(let b = 0; b < widthOfGrid; b++) {
            // Creation of a table data element
            const td = document.createElement('td');
            // Adds a class of square to the table data
            td.classList.add('square');
            // joins the table data element to the table row element
            tr.appendChild(td);
        }
        // Adds an event delegation to the table row
        tr.addEventListener(
            'click',
            function(e)
            {
                // Check if the target of the table row contains a class
                // of square
                if(e.target.classList.contains('square')){
                    // If true, set the background color of the target
                    // to the value of the color picker element
                    e.target.style.backgroundColor = colorPickerEl.value;
                }
            });
        
        // Joins the table row to the table element
        tableEl.appendChild(tr);
    }
    
}
