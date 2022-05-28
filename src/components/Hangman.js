import React, { useState, useEffect } from 'react'
import { wordGenerator } from './Wordlist'

import try1 from './images/try1.png'
import try2 from './images/try2.png'
import try3 from './images/try3.png'
import try4 from './images/try4.png'
import try5 from './images/try5.png'
import try6 from './images/try6.png'
import try7 from './images/try7.png'
import try8 from './images/try8.png'

const Hangman = ({title, totalTries, stickmanImages}) => {
  //Number of tries by user
  const [tryNum, setTryNum] = useState(0)
  //Guessed letter by user
  const [guess, setGuess] = useState([])
  //User Guessing Progress to render for page with '_'
  const [userGuessProgress, setUserGuessProgress] = useState([])
  //Answer for the Game
  const [answer, setAnswer] = useState(() => wordGenerator())

  

  useEffect( () => {
    const guessedWord = () => {
      setUserGuessProgress(answer.split("").map(letter => (guess.includes(letter)? " "+letter+" ": " _ ")))
    }

    guessedWord()
  },[answer, guess])

  const guessHandler = (e) => {
    let letter = e.target.value;
    setGuess([...guess, letter]) //Add the input letter to the state list
    answer.includes(letter)? setTryNum(tryNum) : setTryNum(tryNum + 1)
  }

  const generateButtons = () =>{
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button 
        key = {letter}
        value = {letter} 
        className='btn btn-dark btn-primary m-1' 
        type='button' 
        onClick={(e) => guessHandler(e)}
        disabled={guess.includes(letter)}
      >
        {letter}
      </button>
    ))
  }
  
  const resetButton = (e) => {
    setTryNum(0)
    setGuess([])
    setUserGuessProgress([])
    setAnswer(() => wordGenerator())
  }
  
  const gameOver = tryNum >= totalTries-1;
  let gameButtons = generateButtons();
  let winner = userGuessProgress.includes(" _ ")? false : true

  if (winner) {
    gameButtons = "You Win!"
  }

  if (gameOver){
    gameButtons = "You Lost!"
  }

  return (
    <div className='container'>
      <h1>{title}</h1>

      <div className='text-center'>
        <img src = {stickmanImages[tryNum]} className= 'image' alt = 'Hanged Stickman'/>
      </div>
      
      <div className="text-center">
        <h3>Guess the name of the fruit:</h3>
        <h4>
          {gameOver ? answer: userGuessProgress}
        </h4>
        <>
          {gameButtons}
        </>
        <br/>
        <button type = "button" className="btn btn-primary m-4" onClick={(e) => resetButton(e)}>
          Reset
        </button>
      </div>

      <h4 className="float-bottom text-center">Wrong Guesses: {tryNum} of {totalTries}</h4>
    </div>
  )
}

Hangman.defaultProps = {
  title: 'Welcome to June\'s Hangman Game',
  totalTries : 8,
  stickmanImages : [try1, try2, try3, try4, try5, try6, try7, try8]
}

export default Hangman