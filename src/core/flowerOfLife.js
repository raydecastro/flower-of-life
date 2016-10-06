"use strict";

class FlowerOfLife {
    constructor() {
        this.canvas = document.getElementById("flower-of-life");
        this.context = this.canvas.getContext("2d");
        this.context.strokeStyle = 'blue';
    }

    render() {
        const originX = 279;
        const originY = 279;
        const radius = 54;
        const eightySixPercent = 93/108; 

        this.drawCircle(originX, originY - radius * 0, radius);
        this.drawCircle(originX, originY + radius * 1, radius);

        this.drawCircle(originX - radius * eightySixPercent, originY + radius * 0.5, radius);
        this.drawCircle(originX + radius * eightySixPercent, originY + radius * 0.5, radius);

        this.drawCircle(originX - radius * eightySixPercent, originY - radius * 0.5, radius);
        this.drawCircle(originX + radius * eightySixPercent, originY - radius * 0.5, radius);

        this.drawCircle(originX + radius * eightySixPercent, originY + radius * 1.5, radius);
        this.drawCircle(originX - radius * eightySixPercent, originY + radius * 1.5, radius);

        this.drawCircle(originX, originY - radius * 1, radius);
        this.drawCircle(originX, originY + radius * 2, radius);

        this.drawCircle(originX - radius * eightySixPercent, originY - radius * 1.5, radius);
        this.drawCircle(originX + radius * eightySixPercent, originY - radius * 1.5, radius);

        this.drawCircle(originX - radius * eightySixPercent, originY + radius * 2.5, radius);
        this.drawCircle(originX + radius * eightySixPercent, originY + radius * 2.5, radius);

        this.drawCircle(originX, originY - radius * 2, radius);
        this.drawCircle(originX, originY + radius * 3, radius);

        this.drawCircle(originX - radius * eightySixPercent, originY - radius * 2.5, radius);
        this.drawCircle(originX + radius * eightySixPercent, originY - radius * 2.5, radius);

        this.drawCircle(originX - radius * eightySixPercent, originY + radius * 3.5, radius);
        this.drawCircle(originX + radius * eightySixPercent, originY + radius * 3.5, radius);

        this.drawCircle(originX, originY - radius * 3, radius);
        this.drawCircle(originX, originY + radius * 4, radius);

        this.drawCircle(originX - radius * eightySixPercent, originY - radius * 3.5, radius);
        this.drawCircle(originX + radius * eightySixPercent, originY - radius * 3.5, radius);

        this.drawCircle(originX, originY - radius * 4, radius);

        this.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 3, radius);
        this.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 3, radius);

        this.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 2, radius);
        this.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 2, radius);

        this.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 1, radius);
        this.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 1, radius);

        this.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 0, radius);
        this.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 0, radius);
        
        this.drawCircle(originX - radius * eightySixPercent * 2, originY + radius * 1, radius);
        this.drawCircle(originX + radius * eightySixPercent * 2, originY + radius * 1, radius);

        this.drawCircle(originX - radius * eightySixPercent * 2, originY + radius * 2, radius);
        this.drawCircle(originX + radius * eightySixPercent * 2, originY + radius * 2, radius);

        this.drawCircle(originX - radius * eightySixPercent * 2, originY + radius * 3, radius);
        this.drawCircle(originX + radius * eightySixPercent * 2, originY + radius * 3, radius);

        this.drawCircle(originX - radius * eightySixPercent * 3, originY - radius * 2.5, radius);
        this.drawCircle(originX + radius * eightySixPercent * 3, originY - radius * 2.5, radius);

        this.drawCircle(originX - radius * eightySixPercent * 3, originY - radius * 1.5, radius);
        this.drawCircle(originX + radius * eightySixPercent * 3, originY - radius * 1.5, radius);

        this.drawCircle(originX - radius * eightySixPercent * 3, originY - radius * 0.5, radius);
        this.drawCircle(originX + radius * eightySixPercent * 3, originY - radius * 0.5, radius);

        this.drawCircle(originX - radius * eightySixPercent * 3, originY + radius * 0.5, radius);
        this.drawCircle(originX + radius * eightySixPercent * 3, originY + radius * 0.5, radius);

        this.drawCircle(originX - radius * eightySixPercent * 3, originY + radius * 1.5, radius);
        this.drawCircle(originX + radius * eightySixPercent * 3, originY + radius * 1.5, radius);

        this.drawCircle(originX - radius * eightySixPercent * 3, originY + radius * 2.5, radius);
        this.drawCircle(originX + radius * eightySixPercent * 3, originY + radius * 2.5, radius);

        this.drawCircle(originX - radius * eightySixPercent * 4, originY - radius * 2, radius);
        this.drawCircle(originX + radius * eightySixPercent * 4, originY - radius * 2, radius);

        this.drawCircle(originX - radius * eightySixPercent * 4, originY - radius * 1, radius);
        this.drawCircle(originX + radius * eightySixPercent * 4, originY - radius * 1, radius);

        this.drawCircle(originX - radius * eightySixPercent * 4, originY - radius * 0, radius);
        this.drawCircle(originX + radius * eightySixPercent * 4, originY - radius * 0, radius);
        
        this.drawCircle(originX - radius * eightySixPercent * 4, originY + radius * 1, radius);
        this.drawCircle(originX + radius * eightySixPercent * 4, originY + radius * 1, radius);

        this.drawCircle(originX - radius * eightySixPercent * 4, originY + radius * 2, radius);
        this.drawCircle(originX + radius * eightySixPercent * 4, originY + radius * 2, radius);
    }

    renderFruitOfLife() {
        const originX = 279;
        const originY = 279;
        const radius = 54;
        const eightySixPercent = 93/108; 

        this.context.strokeStyle = 'yellow';

        this.drawCircle(originX, originY - radius * 0, radius);
   
        this.drawCircle(originX, originY + radius * 2, radius);

        this.drawCircle(originX, originY - radius * 2, radius);

        this.drawCircle(originX, originY + radius * 4, radius);

        this.drawCircle(originX, originY - radius * 4, radius);

        this.drawCircle(originX - radius * eightySixPercent * 2, originY - radius * 1, radius);
        this.drawCircle(originX + radius * eightySixPercent * 2, originY - radius * 1, radius);
        
        this.drawCircle(originX - radius * eightySixPercent * 2, originY + radius * 1, radius);
        this.drawCircle(originX + radius * eightySixPercent * 2, originY + radius * 1, radius);


        this.drawCircle(originX - radius * eightySixPercent * 4, originY - radius * 2, radius);
        this.drawCircle(originX + radius * eightySixPercent * 4, originY - radius * 2, radius);

        this.drawCircle(originX - radius * eightySixPercent * 4, originY + radius * 2, radius);
        this.drawCircle(originX + radius * eightySixPercent * 4, originY + radius * 2, radius);
    }

    drawCircle(x, y, r) {
        const circle = {
            x: x,
            y: y,
            r: r
        };

        this.context.beginPath();
        this.context.arc(x, y, r, 0, 2 * Math.PI);
        this.context.stroke();

        console.log('circle: ' + JSON.stringify(circle));

        return circle;
    }

    drawCrossHairs(x, y) {
        this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(x+9, y);
        this.context.lineTo(x-18, y);
        this.context.moveTo(x, y);
        this.context.lineTo(x, y+9);
        this.context.lineTo(x, y-18);
        this.context.moveTo(x, y);
        this.context.stroke();
    }
}

export default FlowerOfLife;