import React, { useState } from 'react';
import Square from '../Square/Square';
import Calc from '../CalculateWinner/Calc';
import Restart from '../RestartGame/Restart';
import StyleBoard from './Board.module.css';

function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [status, setStatus] = useState('Next player: X');

    function handleClick(i) {
        if (squares[i] || Calc(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(nextSquares);
        setXIsNext(!xIsNext);

        const winner = Calc(nextSquares);
        if (winner) {
            setStatus('Winner: ' + winner);
        } else {
            setStatus('Next player: ' + (xIsNext ? 'O' : 'X'));
        }
    }

    function restartGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setStatus('Next player: X');
    }

    return (
        <>
            <div className={StyleBoard.status}>{status}</div>
            <div className={StyleBoard.board}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className={StyleBoard.board}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className={StyleBoard.board}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
            <Restart onRestart={restartGame} />
        </>
    );
}

export default Board;
