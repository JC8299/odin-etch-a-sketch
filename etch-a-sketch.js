function hovered(e) {
    this.classList.add('hovered');
    this.style.backgroundColor = 'rgb(0,0,0)';
}

function createGrid(side) {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.removeEventListener('mouseenter', hovered));

    let grid = document.createElement('div');
    grid.setAttribute('class', 'squareGrid');

    let row;
    let square;
    for (let i = 0; i < side; i++) {
        row = document.createElement('div');
        row.setAttribute('class', 'squareRow');
        for (let j = 0; j < side; j++) {
            square = document.createElement('div');
            square.setAttribute('class', 'square');
            row.appendChild(square);
        }
        grid.appendChild(row);
    }

    sketchContainer = document.querySelector('.sketchContainer');
    sketchContainer.appendChild(grid);
    squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseenter', hovered));

}

function newGrid() {
    let newSide = Number(prompt("Enter side length that is at most 100"));

    while (isNaN(newSide)) {
        if (newSide !== null) {
            break;
        }
        newSide = Number(prompt("Please enter a number that is at most 100"));
    }

    if (!isNaN(newSide) || newSide !== 0) {
        if (newSide > 100) {
            newSide = 100;
            alert("100 is the max size. The side will be set to 100.");
        }
        document.querySelector('.sketchContainer').removeChild(document.querySelector('.squareGrid'));
        createGrid(newSide);
    }
}

createGrid(16);