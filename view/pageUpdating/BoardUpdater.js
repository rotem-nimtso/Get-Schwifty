import {Board} from "../../controller/Common/Board.js";

export class BoardUpdater{
    constructor(boardElement)
    {
        this.boardElement = boardElement;
    }

    init = function(board) {
        board["tiles"].forEach(row => {
            row.forEach(tileObj => {
                let tileElement = document.createElement("button");
                tileElement.id = tileObj.id;
                tileElement.innerText = tileObj.content;
                tileElement.classList.add("tile")
                this.boardElement.append(tileElement);
            })
        });
    }
}