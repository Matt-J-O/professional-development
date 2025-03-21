import './App.css';



export default function Score({ score }) {
    return(
    <div className="scorebox">
        <p className='bold'><b>Score: {score}</b></p>
    </div>
    );
}