import './App.css';



export default function LossPopup({ score, game_reset }) {
    return(
    <div className="popup_loss">
        <h2>Game Over</h2>
        <p><b>Score: {score}</b></p>
        <button onClick={game_reset}>Try Again</button>
    </div>
    );
}