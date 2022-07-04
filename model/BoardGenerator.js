import {Board} from "../controller/Common/Board.js"
import { Tile } from "../controller/Common/Tile.js"
import { TileController } from "../controller/TileController.js";

export class BoardGenerator{
    
    constructor(){

    }
    
    generate = (content) => {    
        let generateTiles = () => {
            
            let columnSize = Math.sqrt(content.length);
            let boardTiles = [];

            for(let row = 0; row < columnSize; row++){
                
                let currentRowTiles = []
                let currentRowValues = content.splice(0, columnSize)

                for(let column =0; column < columnSize; column ++){
                    
                    let tileId = row.toString() + "-" + column.toString();
                    currentRowTiles.push(new Tile(tileId, currentRowValues[column]));
                }

                boardTiles.push(currentRowTiles);
            }

            return boardTiles;
        }

        return new Board(generateTiles());
    }

    setBoard = (board) =>{
        var row = board.tiles[board.tiles.length - 1];
        var tile = row[row.length -1];
        tile.clearContent();
        return board;
    }
}