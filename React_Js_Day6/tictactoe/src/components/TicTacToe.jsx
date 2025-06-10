import { useState } from 'react';
import '../styles/TicTacToe.css';

const TicTacToe = () => {
    const [players, setPlayers] = useState(null);
    const [board, setBoard] = useState(Array(9).fill(''));
    const [isFirstPlayerNext, setIsFirstPlayerNext] = useState(true);
    const [scores, setScores] = useState({
        player1: 0,
        player2: 0,
        lastResult: '-'
    });
    const [matchHistory, setMatchHistory] = useState([]);

    const handlePlayerSetup = (e) => {
        e.preventDefault();
        const player1Name = e.target.player1Name.value.trim();
        const player2Name = e.target.player2Name.value.trim();
        const player1Sign = e.target.player1Sign.value;
        const player2Sign = player1Sign === 'X' ? 'O' : 'X';

        if (!player1Name || !player2Name) {
            alert('Please enter names for both players');
            return;
        }

        setPlayers({
            player1: {
                name: player1Name,
                sign: player1Sign
            },
            player2: {
                name: player2Name,
                sign: player2Sign
            }
        });
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], // rows
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], // columns
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8], // diagonals
            [2, 4, 6]
        ];

        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) return;

        const newBoard = [...board];
        const currentSign = isFirstPlayerNext ? players.player1.sign : players.player2.sign;
        newBoard[index] = currentSign;
        setBoard(newBoard);

        const winner = calculateWinner(newBoard);
        if (winner) {
            // Update scores and result
            const winningPlayer = winner === players.player1.sign ? 'player1' : 'player2';
            const winnerName = winner === players.player1.sign ? players.player1.name : players.player2.name;
            const result = `${winnerName} Won`;
            setScores(prev => ({
                ...prev,
                [winningPlayer]: prev[winningPlayer] + 1,
                lastResult: result
            }));
            // Add to match history
            setMatchHistory(prev => [...prev, {
                matchNumber: prev.length + 1,
                player1Score: winner === players.player1.sign ? 1 : 0,
                player2Score: winner === players.player2.sign ? 1 : 0,
                result: result
            }]);
            setTimeout(() => {
                setBoard(Array(9).fill(''));
            }, 1000);
        } else if (!newBoard.includes('')) {
            // It's a draw
            const result = 'Match Draw';
            setScores(prev => ({
                ...prev,
                lastResult: result
            }));
            // Add to match history
            setMatchHistory(prev => [...prev, {
                matchNumber: prev.length + 1,
                player1Score: 0,
                player2Score: 0,
                result: result
            }]);
            setTimeout(() => {
                setBoard(Array(9).fill(''));
            }, 1000);
        }

        setIsFirstPlayerNext(!isFirstPlayerNext);
    };

    const renderSquare = (index) => {
        return (
            <button className="square" onClick={() => handleClick(index)}>
                {board[index]}
            </button>
        );
    };

    if (!players) {
        return (
            <div className="player-setup">
                <h1>Tic Tac Toe</h1>
                <form onSubmit={handlePlayerSetup}>
                    <div className="player-input">
                        <h2>Player 1</h2>
                        <input 
                            type="text" 
                            name="player1Name" 
                            placeholder="Enter Player 1 name" 
                            required 
                        />
                        <div className="sign-select">
                            <label>
                                <input 
                                    type="radio" 
                                    name="player1Sign" 
                                    value="X" 
                                    defaultChecked 
                                />
                                Play as X
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="player1Sign" 
                                    value="O" 
                                />
                                Play as O
                            </label>
                        </div>
                    </div>
                    <div className="player-input">
                        <h2>Player 2</h2>
                        <input 
                            type="text" 
                            name="player2Name" 
                            placeholder="Enter Player 2 name" 
                            required 
                        />
                        <p className="sign-info">Will play with the other sign</p>
                    </div>
                    <button type="submit" className="start-button">Start Game</button>
                </form>
            </div>
        );
    }

    const winner = calculateWinner(board);
    const status = winner 
        ? `Winner: ${winner === players.player1.sign ? players.player1.name : players.player2.name}`
        : board.includes('')
            ? `Next player: ${isFirstPlayerNext ? players.player1.name : players.player2.name} (${isFirstPlayerNext ? players.player1.sign : players.player2.sign})`
            : 'Draw!';

    return (
        <div className="game-container">
            <div className="game-top-section">
                <div className="player-score player1-score">
                    <h2>{players.player1.name} ({players.player1.sign})</h2>
                    <div className="score-value">{scores.player1}</div>
                </div>
                <div className="game-center">
                    <h1>Tic Tac Toe</h1>
                    <div className="status">{status}</div>
                    <div className="board">
                        <div className="board-row">
                            {renderSquare(0)}
                            {renderSquare(1)}
                            {renderSquare(2)}
                        </div>
                        <div className="board-row">
                            {renderSquare(3)}
                            {renderSquare(4)}
                            {renderSquare(5)}
                        </div>
                        <div className="board-row">
                            {renderSquare(6)}
                            {renderSquare(7)}
                            {renderSquare(8)}
                        </div>
                    </div>
                    <div className="current-result">
                        Last Result: <span className="result-text">{scores.lastResult}</span>
                    </div>
                </div>
                <div className="player-score player2-score">
                    <h2>{players.player2.name} ({players.player2.sign})</h2>
                    <div className="score-value">{scores.player2}</div>
                </div>
            </div>
            {matchHistory.length > 0 && (
                <div className="history-table">
                    <h2>Match History</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Match</th>
                                <th>{players.player1.name}</th>
                                <th>{players.player2.name}</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {matchHistory.map((match) => (
                                <tr key={match.matchNumber}>
                                    <td>{match.matchNumber}</td>
                                    <td>{match.player1Score}</td>
                                    <td>{match.player2Score}</td>
                                    <td className="result-cell">{match.result}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TicTacToe; 