import * as React from 'react';
import './Board.css';
//Start out with a board, this will contain the order of the array
//Place nine squares in order, separated by rows of className
//What happens when a square is clicked onClick
//The starting value is null, 

type Props = {
  handleClick: () => void;
  value: number;
}

const Square = ({handleClick, value}: Props) => {

  return <button onClick={handleClick}>
          {value}
        </button>
}

const Board = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(null))
  const [isX, setIsX] = React.useState(true)
  const [winner, setWinner] = React.useState<null | String>(null)
  let [status, setStatus] = React.useState<String>('')
  const handleClick = (i:number) => {
    if (squares[i] || (winner !== null)){
      return
    }
    squares[i] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)    
    setWinner(calculateWinner(squares))
  }
  
  const resetBoard = () => {
    setSquares(Array(9).fill(null))
    setIsX(true)
    setWinner(null)
  }

  const renderSquare = (i:number) => {
    return <Square handleClick={() => handleClick(i)} value={squares[i]}/>
  }

  return (
    <div className="wrapper">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
      <button onClick={resetBoard}>Reset</button>
    </div>
  )
}

const calculateWinner = (arr: Array<String | null>) => {
  const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [6,4,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]
  for(let i=0; i<winningCombinations.length; i++){
    const [a, b, c] = winningCombinations[i];
    if(arr[a] && arr[a] === arr[b] && arr[a] === arr[c]){
      return arr[a]
    }
  }
  return null
}

export default Board