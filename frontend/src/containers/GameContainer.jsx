import React, { useRef, useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';

const GameContainer = () => {
    const pixiContainer = useRef(null); // This container will hold our PixiJS application
    const [count, setCount] = useState(0);
    const [pixiApp, setPixiApp] = useState(null);
    const [textElement, setTextElement] = useState(null);

    // Initialize PixiJS Application
    useEffect(() => {
        let app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x10bb99,
        });
        pixiContainer.current.appendChild(app.view); // Attach the PIXI application to our container div
        setPixiApp(app);

        // Create a new Text element and add it to the stage
        const textStyle = new PIXI.TextStyle({
            fill: '#ffffff',
            fontSize: 24,
        });
        const text = new PIXI.Text('Button clicked: 0 times', textStyle);
        text.x = 100;
        text.y = 100;
        app.stage.addChild(text);
        setTextElement(text);

        // Load the image
        const texture = PIXI.Texture.from('path_to_your_image.png'); // Replace with the path to your image
        const imageSprite = new PIXI.Sprite(texture);

        // Position the image
        imageSprite.x = app.renderer.width / 2;
        imageSprite.y = app.renderer.height / 2;
        imageSprite.anchor.set(0.5); // This will center the sprite's anchor point

        // Add the image to the stage
        app.stage.addChild(imageSprite);

        // Clean up PIXI application when the component is unmounted
        return () => {
            app.destroy(true, { children: true });
        };
    }, []);

    // Update PixiJS Text Element when count changes
    useEffect(() => {
        if (textElement) {
            textElement.text = `Button clicked: ${count} times`;
        }
    }, [count, textElement]);

    return (
        <div>
            <div ref={pixiContainer} /> {/* This div is where the PixiJS canvas will be injected */}
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    );
};

export default GameContainer;
