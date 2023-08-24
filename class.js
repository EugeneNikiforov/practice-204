const gridSize = 4;
const cellsCount = gridSize * gridSize;
class Cell {
    constructor(gridElement, x, y) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridElement.append(cell);
        this.x = x;
        this.y = y;
    }
}

export class Grid {
    constructor(gridElement) {
        this.cells = [];
        for (let i = 0; i < cellsCount; i++) {
            this.cells.push(
                new Cell(gridElement, i % gridSize, Math.floor(i % gridSize))
            );
            
        }
    }
}