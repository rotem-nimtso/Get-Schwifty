import {Board} from "../../controller/Common/Board.js";

export class BoardUpdater{
    constructor(boardElement)
    {
        this.boardElement = boardElement;
    }
    
    init = function(board, givenFunction) {
        
        let createTile = function(tileObj) {
            let tileElement = document.createElement("button");
            
            tileElement.id = tileObj.id;
            tileElement.innerText = tileObj.content;
            tileElement.addEventListener("click", () => {givenFunction(tileObj.id)})

            tileElement.classList.add("tile");
            return tileElement;
        }

        board["tiles"].forEach(row => {
            row.forEach(tileObj => {
                this.boardElement.append(createTile(tileObj))
            })
        })
    }

    updateBoard = function(board) {
        board["tiles"].forEach(row=>{
            row.forEach(tile => {
                let tileElement = document.getElementById(tile.id);
                tileElement.innerText = tile.content;
            })
        }
        )
    }
}