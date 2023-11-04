import React from 'react'
import Herosection from '../Components/Herosection'
import Header from '../Components/Header'
import styles from './Homepage.module.css'


const HomePage = () => {

  return (
    <div className={styles.Homepage}>
   
      <Header />
      <Herosection />
  
    </div>
  
  )
}

export default HomePage;
