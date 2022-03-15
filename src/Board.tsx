import * as React from 'react';
import './Board.css';
//Start out with a board, this will contain the order of the array
//Place nine squares in order, separated by rows of className
//Create square array

type Props = {
  handleClick: () => void;
  value: number;
}

const Square = ({handleClick, value}: Props) => {

  return <button>
          {value}
        </button>
}

const Board = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(null))
  const [isX, setIsX] = React.useState(true)

  const handleClick = () => {
    

  }

  return (
    <>
      <Square handleClick={handleClick} value={squares[0]}/>
    </>
  );
}

export default Board;
