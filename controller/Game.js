import { BoardGenerator } from "../model/BoardGenerator.js";
import { BoardUpdater } from "../view/pageUpdating/BoardUpdater.js";

export class Game{
    constructor(boardGenerator, content, boardUpdater){
        this.boardGenerator = boardGenerator;
        this.content = content;
        this.boardUpdater = boardUpdater;
    }

    init = function() {
        var board = this.boardGenerator.generate(this.content);
        this.boardUpdater.init(board);
    }
}