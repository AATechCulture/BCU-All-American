import React from 'react'
import Herosection from '../Components/Herosection'
import Header from '../Components/Header'
import styles from '../Homepage.module.css'
import Main from "../Components/Main"



const HomePage = () => {

  return (
    <div className={styles.Homepage}>
   
      <Header />
      <Herosection />
      <Main />
  
    </div>
  
  )
}

export default HomePage;
