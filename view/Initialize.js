import { Game } from "../controller/Game.js";
import { BoardGenerator } from "../model/BoardGenerator.js";
import { BoardUpdater } from "./pageUpdating/BoardUpdater.js";

var defualtBoard = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

window.onload = function(){
    setGame();
}

function setGame(){
    var boardContent = defualtBoard;
    var boardGenerator = new BoardGenerator();

    var boardElement = document.getElementById("board");
    var boardUpdater = new BoardUpdater(boardElement);
    
    var game = new Game(boardGenerator, boardContent, boardUpdater);
    game.init();
}


