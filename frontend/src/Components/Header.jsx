import React from "react";
import styles from "../Static/Header.module.css"
import logo from "../resources/AmericanAirlinesLogo.png"


const Header = () => {
    return (
        <div className={styles.Header}>

            <div>
                <span>
                    <img src={logo} alt="logo"></img>
                </span>
                <span>
                    <h1>All-American</h1>
                </span>
            </div>

      
        </div>)
}

export default Header;

