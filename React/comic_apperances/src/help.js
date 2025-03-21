import './App.css';



export default function HelpPopup({ turn_off }) {
    return(
    <div className="popup_help"onClick={turn_off}>
        <h2>How to Play:</h2>
        <ul>
            <li>You will be given one comic character and the number of comics they have been in.</li>
            <br></br>
            <li>You will then have another character and will click on the character you think has been in more comics.</li>
            <br></br>
            <li>Pictures and apperance information was gotten from <a href='https://comicvine.gamespot.com/characters/'>Comicvine</a>, 
            and design inspiration was taken from <a href='https://www.higherlowergame.com/'>The Higher Lower Game</a></li>
            <br></br>
            <li>You can find more of my projects on my <a href='https://github.com/Matt-J-O'>Github</a></li>
            <br></br>
            <li>Click anywhere to begin!</li>
        </ul>
    </div>
    );
}