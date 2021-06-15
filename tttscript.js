board = document.getElementsByClassName('ttt')
button = document.getElementsByClassName('btn')

function clearBoard(){
    console.log('clicked')
    //for (square in board){
    for(i=0; i<board.length; i++){
        board[i].textContent = ""
    }
}

button[0].addEventListener('click', clearBoard)

function changeSquare(){
    if (this.textContent == ""){
        this.textContent = 'X'
    }else if (this.textContent == 'X'){
        this.textContent = 'O'
    }else if (this.textContent == 'O'){
        this.textContent = ''
    }
}

for (square in board){
    board[square].addEventListener('click',changeSquare)
}

// for (i=0;i < board.length; i++){
//     board[i].addEventListener('click',changeSquare)
// }





// board2[0].addEventListener('click',changeSquare)

// board9[0].textContent = 'X'