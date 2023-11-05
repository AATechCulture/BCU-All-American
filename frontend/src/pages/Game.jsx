import React from 'react';
import Navbar from '../components/Navbar';
import GameContainer from '../containers/GameContainer';

const Game = () => {
    return (
        <div className="w-screen h-screen overflow-hidden bg-american-blue-bg">
            <Navbar />
            <GameContainer />

        </div>
    );
};

export default Game;
