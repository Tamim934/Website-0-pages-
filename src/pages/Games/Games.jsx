import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/material'
const Games = () => {
 const [board, setBoard] = useState(Array(9).fill(null));
 const [xIsNext, setXIsNext] = useState(true);
 const winner = calculateWinner(board);

 const handleClick = (i) => {
   const boardCopy = [...board];
   if (winner || boardCopy[i]) return;
   boardCopy[i] = xIsNext ? 'X' : 'O';
   setBoard(boardCopy);
   setXIsNext(!xIsNext);
 };

 return (
<div className="app">
      <Typography variant="h4">Tic Tac Toe</Typography>
      <Board squares={board} onClick={handleClick} />
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" >
        <Typography variant="h6">
          {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setBoard(Array(9).fill(null))}>
          Start New Game
        </Button>
      </Box>
    </div>
  );
}

const Board = ({ squares, onClick }) => (
 <Grid container spacing={3}>
   {squares.map((square, i) => (
     <Grid item xs={4} key={i}>
       <Button variant="outlined" fullWidth onClick={() => onClick(i)} style={{ height: '100px', fontSize: '24px' }}>
         {square}
       </Button>
     </Grid>
   ))}
 </Grid>
);


function calculateWinner(squares) {
 const lines = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
 ];
 
 for (let i = 0; i < lines.length; i++) {
   const [a, b, c] = lines[i];
   
   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
     return squares[a];
   }
 }
 
 return null;
}

export default Games;


