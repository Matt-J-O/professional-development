import './App.css';



export default function Score({ score }) {
    return(
    <div className="scorebox">
        <p>Score: {score}</p>
    </div>
    );
}