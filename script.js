import { Grid } from './class.js';
import { Tile } from "./tile.js";

const gameField = document.getElementById("field");
const grid = new Grid(gameField);
grid.getRandomEmptyCell().linkTile(new Tile(gameField));
grid.getRandomEmptyCell().linkTile(new Tile(gameField));
setupInputOnce();

function setupInputOnce() {
    window.addEventListener("keydown", handleInput, {once: true});
}
function handleInput(e) {
    switch (e.key) {
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            break;
        case "ArrowLeft":
            break;
        case "ArrowRight":
            break;
        default:
            setupInputOnce();
            return;
    }
    setupInputOnce();
}

function moveUp() {
    slideTiles(grid.cellsGroupedByColumn);
}