import { Board } from "../controller/Common/Board.js";
import { Tile } from "../controller/Common/Tile.js";

export class MoveMaker{
    constructor()
    {
        this.board;
    }

    tryMove = function(tileId) {
        console.log(this.getTile(tileId));
    }

    getTile = function(tileId){
        this.board.tiles.forEach(row => {
            row.forEach(tile => {
                if(tile.id == tileId)
                {console.log(tile);
                return tile;}
            })
        });
    }
}