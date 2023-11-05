import React from "react";
import Main from "../Components/Main";
import styles from '../Static/Game.module.css'
import Herosection from "../Components/Herosection";


function Game() {
  return (
    <div className={styles.Game}>
        <Main />
        <Herosection />
        
    </div>
  )
}

export default Game
