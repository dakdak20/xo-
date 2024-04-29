<script>
        let currentPlayer = 'X';
let board = [['', '', ''], ['', '', ''], ['', '', '']];
let gameOver = false;

function placeMark(row, col) {
    if (!gameOver && board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById('status').innerText = "لاعب " + currentPlayer + "'";
        document.getElementById('board').children[row * 3 + col].innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            endGame(board[i][0]);
            return;
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            endGame(board[0][i]);
            return;
        }
    }
    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        endGame(board[0][0]);
        return;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        endGame(board[0][2]);
        return;
    }
    // Check if it's a tie
    let tie = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                tie = false;
                break;
            }
        }
    }
    if (tie) {
        endGame('tie');
    }
}

function endGame(winner) {
    gameOver = true;
    if (winner === 'tie') {
        document.getElementById('status').innerText = "تعادل";
    } else {
        document.getElementById('status').innerText = "فاز " + winner + " اللاعب";
    }
}

function resetBoard() {
    currentPlayer = 'X';
    board = [['', '', ''], ['', '', ''], ['', '', '']];
    gameOver = false;
    document.getElementById('status').innerText = "دور اللاعب اكس";
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

    </script>