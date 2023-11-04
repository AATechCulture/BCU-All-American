import React from 'react'
import styles from "../Static/Main.module.css";
import plane from "../resources/plane.png"

export const Main = () => {
  return (
    <div className={styles.Main}>

        <div>
          <img src={plane} alt="plane"></img>
        </div>
      
    </div>
  )
}

export default Main;

// blue screen
// plane
