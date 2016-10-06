"use strict";

import CanvasInterface from "./canvasInterface";

class FlowerOfLife {
    constructor() {
        this.canvas = new CanvasInterface();
    }

    render() {
        const originX = 279;
        const originY = 279;
        const radius = 54;
        const eightySixPercent = 93/108; 

        this.canvas.drawCircle(originX, originY - radius * 0, radius);
        this.canvas.drawCircle(originX, originY + radius * 1, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent, originY + radius * 0.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent, originY + radius * 0.5, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent, originY - radius * 0.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent, originY - radius * 0.5, radius);

        this.canvas.drawCircle(originX + radius * eightySixPercent, originY + radius * 1.5, radius);
        this.canvas.drawCircle(originX - radius * eightySixPercent, originY + radius * 1.5, radius);

        this.canvas.drawCircle(originX, originY - radius * 1, radius);
        this.canvas.drawCircle(originX, originY + radius * 2, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent, originY - radius * 1.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent, originY - radius * 1.5, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent, originY + radius * 2.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent, originY + radius * 2.5, radius);

        this.canvas.drawCircle(originX, originY - radius * 2, radius);
        this.canvas.drawCircle(originX, originY + radius * 3, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent, originY - radius * 2.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent, originY - radius * 2.5, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent, originY + radius * 3.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent, originY + radius * 3.5, radius);

        this.canvas.drawCircle(originX, originY - radius * 3, radius);
        this.canvas.drawCircle(originX, originY + radius * 4, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent, originY - radius * 3.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent, originY - radius * 3.5, radius);

        this.canvas.drawCircle(originX, originY - radius * 4, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 3, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 3, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 2, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 2, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 1, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 1, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 0, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 0, radius);
        
        this.canvas.drawCircle(originX - radius * eightySixPercent * 2, originY + radius * 1, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 2, originY + radius * 1, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 2, originY + radius * 2, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 2, originY + radius * 2, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 2, originY + radius * 3, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 2, originY + radius * 3, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 3, originY - radius * 2.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 3, originY - radius * 2.5, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 3, originY - radius * 1.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 3, originY - radius * 1.5, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 3, originY - radius * 0.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 3, originY - radius * 0.5, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 3, originY + radius * 0.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 3, originY + radius * 0.5, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 3, originY + radius * 1.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 3, originY + radius * 1.5, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 3, originY + radius * 2.5, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 3, originY + radius * 2.5, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 4, originY - radius * 2, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 4, originY - radius * 2, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 4, originY - radius * 1, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 4, originY - radius * 1, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 4, originY - radius * 0, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 4, originY - radius * 0, radius);
        
        this.canvas.drawCircle(originX - radius * eightySixPercent * 4, originY + radius * 1, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 4, originY + radius * 1, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 4, originY + radius * 2, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 4, originY + radius * 2, radius);
    }

    renderFruitOfLife() {
        const originX = 279;
        const originY = 279;
        const radius = 54;
        const eightySixPercent = 93/108; 

        this.context.strokeStyle = 'yellow';

        this.canvas.drawCircle(originX, originY - radius * 0, radius);
   
        this.canvas.drawCircle(originX, originY + radius * 2, radius);

        this.canvas.drawCircle(originX, originY - radius * 2, radius);

        this.canvas.drawCircle(originX, originY + radius * 4, radius);

        this.canvas.drawCircle(originX, originY - radius * 4, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 1, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 1, radius);
        
        this.canvas.drawCircle(originX - radius * eightySixPercent * 2, originY + radius * 1, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 2, originY + radius * 1, radius);


        this.canvas.drawCircle(originX - radius * eightySixPercent * 4, originY - radius * 2, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 4, originY - radius * 2, radius);

        this.canvas.drawCircle(originX - radius * eightySixPercent * 4, originY + radius * 2, radius);
        this.canvas.drawCircle(originX + radius * eightySixPercent * 4, originY + radius * 2, radius);
    }
}

export default FlowerOfLife;