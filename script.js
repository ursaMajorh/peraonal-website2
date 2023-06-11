
// deklarasi letiabel 
let menuBtn = document.querySelector(".menu-btn"),
    menuList = document.querySelector(".menu-list")

// ketika button menu diklik
menuBtn.addEventListener("click", function() {
  if(menuList.style.display == "none") {
    menuList.style.display = "flex"
  } else {
    menuList.style.display = "none"
  }
})


// tic tac toe
let board = ['', '', '', '', '', '', '', '', ''],
    currentPlayer = 'X',
    gameEnded = false;

function makeMove(index) {
  if (gameEnded || board[index] !== '') {
    return;
  }

  board[index] = currentPlayer;
  document.getElementById('game-board').children[index].textContent = currentPlayer;

  if (checkWinner()) {
    alert(`Player ${currentPlayer} wins!`);
    resetGame();
    return;
  }

  if (isDraw()) {
    alert("It's a draw!");
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6] // Diagonal
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }

  return false;
}

function isDraw() {
  return !board.includes('');
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  const cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.textContent = '';
  }
  currentPlayer = 'X';
  gameEnded = false;
}
