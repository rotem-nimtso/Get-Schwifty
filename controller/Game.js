import { BoardGenerator } from "../model/BoardGenerator.js";
import { BoardUpdater } from "../view/pageUpdating/BoardUpdater.js";
import {Tile} from "./Common/Tile.js"
import { TileController } from "./TileController.js";
import { MoveMaker } from "../model/MoveMaker.js";

export class Game{
    constructor(boardGenerator, content, boardUpdater, tileController){
        this.boardGenerator = boardGenerator;
        this.content = content;
        this.boardUpdater = boardUpdater;
        this.tileController = tileController;
    }

    init = function() {
        this.board = this.boardGenerator.generate(this.content); //Ask Modul For Genrated Board
        
        this.tileController.moveMaker.board = this.board;
        this.boardUpdater.init(this.board, (id) => this.tileController.move(id));//Update View With Recieved Board
        }

    start = function() {
        this.board = this.boardGenerator.setBoard(this.board);
        this.boardUpdater.updateBoard(this.board);

    }
}