export class TileController{
    constructor()
    {}

    move = (tileId) =>{
        return () => console.log(tileId);
    }
}