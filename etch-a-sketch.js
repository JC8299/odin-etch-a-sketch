function createGrid(width, height) {
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

    return grid;
}



grid = createGrid(16, 16);

document.body.appendChild(grid);