import React from 'react'
import Herosection from '../Components/Herosection'
import styles from '../Static/Homepage.module.css'
import Main from "../Components/Main"
import ToGame from "../Components/ToGame"



const HomePage = () => {

  return (
    <div className={styles.Homepage}>
   
      <Herosection />
      <Main />
      <ToGame />
  
    </div>
  
  )
}

export default HomePage;
