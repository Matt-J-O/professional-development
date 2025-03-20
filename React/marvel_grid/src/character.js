import './App.css';

function Label({name, apperances, revealed, onguess}) {
    return(
        <div className="txtDiv" onClick={onguess}>
            <h2 className="label">{name}</h2>
            <h2 className="label">{revealed && apperances}</h2>
        </div>
    );
}

export default function Character({ name, apperances, img, revealed, onguess}) {
    const bgImg = {
        backgroundImage: 'url(' + img + ')'
    };

    return(
    <div style={bgImg} className="imgDiv">
        <Label 
        name = {name}
        apperances = {apperances}
        revealed = {revealed}
        onguess = {onguess}/>
    </div>
    );
}