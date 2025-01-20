function makeRow(columns){
    container = document.getElementById('container');
    newDiv = document.createElement('div');
    newDiv.classList.add('row');

    container.appendChild(newDiv);

    for (let i=0; i<columns; i++) {
        squareDiv = document.createElement('div')
        squareDiv.classList.add('square')
        squareDiv.addEventListener('mouseover', function( event ) {
            console.log('clicky!', event.type, event.target);
            event.target.setAttribute("style","background-color:orange;");
        });
        newDiv.appendChild(squareDiv);
    }

}

function generateGrid(rows, columns){
    let elem = document.getElementById('container');
    elem.style.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;
    elem.style.gridTemplateRows = `repeat(${columns}, minmax(0, 1fr))`;
    for (let i=0; i<rows; i++) {
        makeRow(columns);
    }
}

function removeGrid(){
    document.querySelectorAll('.row').forEach(e => e.remove());
    document.querySelectorAll('.square').forEach(e => e.remove());
}

generateGrid(16,16);

const btn = document.getElementById('generate');

btn.addEventListener('click', ()=>{
    dim = prompt("Provide an integer value (1-100)");
    console.log(dim, (dim == Math.round(dim)), dim>0, dim < 101);
    if ((dim == Math.round(dim)) && (dim > 0) && (dim < 101)) {
        removeGrid();
        generateGrid(dim, dim);
    } else {
        alert("Not a valid number");
    }
    
});