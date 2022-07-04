import { BoardGenerator } from "../model/BoardGenerator.js";
import { BoardUpdater } from "../view/pageUpdating/BoardUpdater.js";
import { TileController } from "./TileController.js";

export class Game{
    constructor(boardGenerator, content, boardUpdater){
        this.boardGenerator = boardGenerator;
        this.content = content;
        this.boardUpdater = boardUpdater;
    }

    init = function() {
        var board = this.boardGenerator.generate(this.content);
        var tileController = new TileController();
        this.boardUpdater.init(board, tileController.move);
    }

    start = function() {

    }
}