function makeRow(){
    container = document.getElementById('container');
    newDiv = document.createElement('div');
    newDiv.classList.add('row');

    container.appendChild(newDiv);

    for (let i=0; i<16; i++) {
        squareDiv = document.createElement('div')
        squareDiv.classList.add('square')
        squareDiv.addEventListener('mouseover', function( event ) {
            console.log('clicky!', event.type, event.target);
            event.target.setAttribute("style","background-color:orange;");
        });
        newDiv.appendChild(squareDiv);
    }

}


for (let i=0; i<16; i++) {
    makeRow();
}