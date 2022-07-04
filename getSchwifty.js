var board;
var moves = 0;
var emptyTileId = "";

window.onload = function() {
    setGame();
}

function setGame() {

    board = generateBoard(getboardContent());
    createBoardView(board);
}

function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = ""; //clear the classList
    tile.classList.add("tile");
    tile.innerText = num.toString();               
}

function generateBoard(values){
    
    var columnSize = Math.sqrt(values.length);
    let board = [];


    for (let i = 0; i < columnSize; i++ )
    {
        let row = values.splice(0, columnSize);
        board.push(row);

    }

    return board;
}

function getboardContent()
{
    return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
}

function createBoardView(board){

    let columnSize = board.length;

    for (let r = 0; r < columnSize; r++) {
        for (let c = 0; c < columnSize; c++) {
            let content = board[r][c];
            
            let tile = document.createElement("button");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click", function () {tilePressed(this)})
            
            updateTile(tile, content);
            document.getElementById("board").append(tile);
        }
    }

    clearTile(document.getElementById("3-3"));
}

function tilePressed(tile)
{
    if (isValidPress()){
        var content = tile.innerText;
        document.getElementById(emptyTileId).innerText = content;
        clearTile(tile);
    }
}

function clearTile(tile)
{
    tile.innerText = "";
    emptyTileId = tile.id;
    console.log(emptyTileId);
}

function isValidPress()
{
    return true;
}