import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../Static/ToGame.module.css"; 

function ToGame() {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/game'); 
  }

  return (
    <div className={styles.button-container}>
      <button className={styles.safety-game-button} onClick={handleClick}>
        Play our NEW All-American Safety Game!
      </button>
    </div>
  );
}

export default ToGame;
