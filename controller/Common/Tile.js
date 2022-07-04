export class Tile{
    constructor(id, content)
    {
        this.id = id;
        this.content = content;
    }

    setContent = function(newContent){
        this.content = newContent;
    }
}