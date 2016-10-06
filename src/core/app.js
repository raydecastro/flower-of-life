"use strict";

import FlowerOfLife from './flowerOfLife';

class App {
    constructor() {
        this.love = "the most powerful force in the universe.";
    }

    run(canvas) {
        const flower = new FlowerOfLife();

        if (canvas !== undefined) {
            flower.canvas = canvas;
        }
        
        flower.render();   

        console.log(".love> is " + this.love);
        return true; 
    }
}

export default App;
