import './App.css';
import Score from './score.js';
import Character from './character.js';
import logo from './logo.png';
import MetaTags from './metaTags.js';
import LossPopup from './loss.js'
import HelpPopup from './help.js';
import {useEffect, useState} from 'react';

import characterData from './database.json'

function App() {
  const numCharacters = 100;
  const [ids, setIds] = useState(Array(2).fill(0));
  const [leftCharacter, setLeftCharacter] = useState({name: "tmp", apperances: 1, img: "", id: 0});
  const [rightCharacter, setRightCharacter] = useState({name: "tmp", apperances: 0, img: "", id: 0});
  const [rightReveal, setRightReveal] = useState(false);
  const [lost, setLost] = useState(false);
  const [score, setScore] = useState(0);
  const [help, setHelp] = useState(true);

  useEffect(() => {
    let tmp_l = getNewCharacter();
    setLeftCharacter(tmp_l);
    let tmp_r = getNewCharacter(tmp_l.id);
    setRightCharacter(tmp_r);
    setIds([tmp_l.id, tmp_r.id]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  function getNewCharacter(other=-1) {
    let id = Math.floor(Math.random() * numCharacters);
    while (ids.includes(id) || id === other) {
      id = Math.floor(Math.random() * numCharacters);
    }
    return characterData[id]
  }

  function restart() {
    setScore(0);
    let tmp_l = getNewCharacter();
    setLeftCharacter(tmp_l);
    let tmp_r = getNewCharacter(tmp_l.id);
    setRightCharacter(tmp_r);
    setIds([tmp_l.id, tmp_r.id]);
    setRightReveal(false)
    setLost(false);
  }

  function onguess(left) {
    //True == left side, False == right side ()
    if (lost || help) {
      return;
    }
    if (left) {
      if (leftCharacter.apperances < rightCharacter.apperances) {
        setLost(true);
        setRightReveal(true);
        console.log("Lost round :(")
        return;
      }
    }
    else {
      if (leftCharacter.apperances > rightCharacter.apperances) {
        setLost(true);
        setRightReveal(true);
        console.log("Lost round :(")
        return;
      }
    }
    setScore(score + 1);
    let tmp = getNewCharacter();
    setIds([rightCharacter.id, tmp.id])
    setLeftCharacter(rightCharacter);
    setRightCharacter(tmp);
  }

  console.log(ids)
  console.log(leftCharacter.id)
  console.log(rightCharacter.id)


  return (
    <>
    <MetaTags />

    {lost && <LossPopup score = {score} game_reset={() => restart()}/>}
    {help && <HelpPopup  turn_off ={() => setHelp(false)}/>}
    <div className='flexContainer' onClick={() => setHelp(false)}>
      <Character
      name = {leftCharacter.name}
      apperances={leftCharacter.apperances}
      img={leftCharacter.img}
      revealed={true}
      onguess={() => onguess(true)}
      />
      <Character
      name = {rightCharacter.name}
      apperances={rightCharacter.apperances}
      img={rightCharacter.img}
      revealed={rightReveal}
      onguess={() => onguess(false)}
      />
    </div>
    <Score score = {score}/>
    <img className = "logo" src = {logo} alt="" onClick={() => setHelp(true)}></img>
    </>
  );
}

export default App;
