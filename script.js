import { Grid } from './class.js';
import { Tile } from "./tile.js";

const gameField = document.getElementById("field");
const grid = new Grid(gameField);
grid.getRandomEmptyCell().linkTile(new Tile(gameField));
grid.getRandomEmptyCell().linkTile(new Tile(gameField));