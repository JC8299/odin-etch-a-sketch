function hovered(e) {
    this.classList.add('hovered');
    this.style.backgroundColor = 'rgb(0,0,0)';
}

function createGrid(width, height) {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.removeEventListener('mouseenter', hovered));

    let grid = document.createElement('div');
    grid.setAttribute('class', 'squareGrid');

    let row;
    let square;
    for (let i = 0; i < height; i++) {
        row = document.createElement('div');
        row.setAttribute('class', 'squareRow');
        for (let j = 0; j < width; j++) {
            square = document.createElement('div');
            square.setAttribute('class', 'square');
            row.appendChild(square);
        }
        grid.appendChild(row);
    }

    document.body.appendChild(grid);
    squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseenter', hovered));

}



createGrid(16, 16);