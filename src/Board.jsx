import { useState } from "react";
import Square from "./Square";
function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);

    const clickHandler = (index) => {
        let newSquares = squares.slice();
        newSquares[index] = getPlayer();

        setSquares(newSquares);
        const winner = checkFinish(newSquares);
        if (winner) {
            setWinner(winner);
        }
    };

    const getPlayer = () => {
        let total = squares.filter((square) => square !== null).length;
        return total % 2 === 0 ? "X" : "O";
    };

    function checkFinish(newSquares) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (
                newSquares[a] &&
                newSquares[a] === newSquares[b] &&
                newSquares[a] === newSquares[c]
            ) {
                return newSquares[a];
            }
        }
        return null;
    }

    return (
        <>
            <div className="board-row">
                <Square
                    value={squares[0]}
                    onClick={clickHandler}
                    index={0}
                ></Square>
                <Square
                    value={squares[1]}
                    onClick={clickHandler}
                    index={1}
                ></Square>
                <Square
                    value={squares[2]}
                    onClick={clickHandler}
                    index={2}
                ></Square>
            </div>
            <div className="board-row">
                <Square
                    value={squares[3]}
                    onClick={clickHandler}
                    index={3}
                ></Square>
                <Square
                    value={squares[4]}
                    onClick={clickHandler}
                    index={4}
                ></Square>
                <Square
                    value={squares[5]}
                    onClick={clickHandler}
                    index={5}
                ></Square>
            </div>
            <div className="board-row">
                <Square
                    value={squares[6]}
                    onClick={clickHandler}
                    index={6}
                ></Square>
                <Square
                    value={squares[7]}
                    onClick={clickHandler}
                    index={7}
                ></Square>
                <Square
                    value={squares[8]}
                    onClick={clickHandler}
                    index={8}
                ></Square>
            </div>
            <div className="winner">Winner is {winner}</div>
        </>
    );
}
export default Board;
