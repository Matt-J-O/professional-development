import './App.css';
import Score from './score.js';
import Character from './character.js';
import logo from './logo.png';
import MetaTags from './metaTags.js';
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

  function getNewCharacter() {
    let id = Math.floor(Math.random() * numCharacters);
    while (ids.includes(id)) {
      id = Math.floor(Math.random() * numCharacters);
    }
    console.log(id)
    console.log(characterData[id])
    return characterData[id]
  }

  useEffect(() => {
    setLeftCharacter(getNewCharacter())
    setRightCharacter(getNewCharacter())
    setIds([leftCharacter.id, rightCharacter.id])
    console.log(leftCharacter)
    console.log(rightCharacter)
  }, [])

  function onguess(left, lost) {
    //True == left side, False == right side ()
    if (lost) {
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
    setLeftCharacter(rightCharacter);
    setRightCharacter(tmp);
    setIds([leftCharacter.id, rightCharacter.id])
  }


  return (
    <>
    <MetaTags />

    <div className='flexContainer'>
      <Character
      name = {leftCharacter.name}
      apperances={leftCharacter.apperances}
      img={leftCharacter.img}
      revealed={true}
      onguess={() => onguess(true, lost)}
      />
      <Character
      name = {rightCharacter.name}
      apperances={rightCharacter.apperances}
      img={rightCharacter.img}
      revealed={rightReveal}
      onguess={() => onguess(false, lost)}
      />
    </div>
    <Score score = {score}/>
    <img className = "logo" src = {logo} alt=""></img>
    </>
  );
}

export default App;
