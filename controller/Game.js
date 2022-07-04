import { BoardGenerator } from "../model/BoardGenerator.js";
import { BoardUpdater } from "../view/pageUpdating/BoardUpdater.js";
import {Tile} from "./Common/Tile.js"
import { TileController } from "./TileController.js";

export class Game{
    constructor(boardGenerator, content, boardUpdater){
        this.boardGenerator = boardGenerator;
        this.content = content;
        this.boardUpdater = boardUpdater;
    }

    init = function() {
        this.board = this.boardGenerator.generate(this.content);
        var tileController = new TileController();
        this.boardUpdater.init(this.board, tileController.move);
    }

    start = function() {
        this.board = this.boardGenerator.setBoard(this.board);
        this.boardUpdater.updateBoard(this.board);

    }
}