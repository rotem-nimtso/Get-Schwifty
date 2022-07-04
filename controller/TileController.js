import { MoveMaker } from "../model/MoveMaker.js";

var name;

export class TileController{
    constructor(moveMaker)
    {
        this.moveMaker = moveMaker;
    }

    move = function(id){
        var updatedTiles = this.moveMaker.tryMove(id);
    }
}