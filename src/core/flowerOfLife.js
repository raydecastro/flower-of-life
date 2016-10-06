"use strict";

import Canvas from "./canvas";

class FlowerOfLife {
    constructor() {
    }

    render() {
        const originX = 279;
        const originY = 279;
        const radius = 54;
        const eightySixPercent = 93/108; 

        Canvas.drawCircle(originX, originY - radius * 0, radius);
        Canvas.drawCircle(originX, originY + radius * 1, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent, originY + radius * 0.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent, originY + radius * 0.5, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent, originY - radius * 0.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent, originY - radius * 0.5, radius);

        Canvas.drawCircle(originX + radius * eightySixPercent, originY + radius * 1.5, radius);
        Canvas.drawCircle(originX - radius * eightySixPercent, originY + radius * 1.5, radius);

        Canvas.drawCircle(originX, originY - radius * 1, radius);
        Canvas.drawCircle(originX, originY + radius * 2, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent, originY - radius * 1.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent, originY - radius * 1.5, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent, originY + radius * 2.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent, originY + radius * 2.5, radius);

        Canvas.drawCircle(originX, originY - radius * 2, radius);
        Canvas.drawCircle(originX, originY + radius * 3, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent, originY - radius * 2.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent, originY - radius * 2.5, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent, originY + radius * 3.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent, originY + radius * 3.5, radius);

        Canvas.drawCircle(originX, originY - radius * 3, radius);
        Canvas.drawCircle(originX, originY + radius * 4, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent, originY - radius * 3.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent, originY - radius * 3.5, radius);

        Canvas.drawCircle(originX, originY - radius * 4, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 3, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 3, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 2, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 2, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 1, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 1, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 0, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 0, radius);
        
        Canvas.drawCircle(originX - radius * eightySixPercent * 2, originY + radius * 1, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 2, originY + radius * 1, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 2, originY + radius * 2, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 2, originY + radius * 2, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 2, originY + radius * 3, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 2, originY + radius * 3, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 3, originY - radius * 2.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 3, originY - radius * 2.5, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 3, originY - radius * 1.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 3, originY - radius * 1.5, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 3, originY - radius * 0.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 3, originY - radius * 0.5, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 3, originY + radius * 0.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 3, originY + radius * 0.5, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 3, originY + radius * 1.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 3, originY + radius * 1.5, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 3, originY + radius * 2.5, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 3, originY + radius * 2.5, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 4, originY - radius * 2, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 4, originY - radius * 2, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 4, originY - radius * 1, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 4, originY - radius * 1, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 4, originY - radius * 0, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 4, originY - radius * 0, radius);
        
        Canvas.drawCircle(originX - radius * eightySixPercent * 4, originY + radius * 1, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 4, originY + radius * 1, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 4, originY + radius * 2, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 4, originY + radius * 2, radius);
    }

    renderFruitOfLife() {
        const originX = 279;
        const originY = 279;
        const radius = 54;
        const eightySixPercent = 93/108; 

        this.context.strokeStyle = 'yellow';

        Canvas.drawCircle(originX, originY - radius * 0, radius);
   
        Canvas.drawCircle(originX, originY + radius * 2, radius);

        Canvas.drawCircle(originX, originY - radius * 2, radius);

        Canvas.drawCircle(originX, originY + radius * 4, radius);

        Canvas.drawCircle(originX, originY - radius * 4, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 1, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 1, radius);
        
        Canvas.drawCircle(originX - radius * eightySixPercent * 2, originY + radius * 1, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 2, originY + radius * 1, radius);


        Canvas.drawCircle(originX - radius * eightySixPercent * 4, originY - radius * 2, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 4, originY - radius * 2, radius);

        Canvas.drawCircle(originX - radius * eightySixPercent * 4, originY + radius * 2, radius);
        Canvas.drawCircle(originX + radius * eightySixPercent * 4, originY + radius * 2, radius);
    }
}

export default FlowerOfLife;