"use strict";

class CanvasInterface {
    drawCircle(x, y, r) {
        const circle = {
            x: x,
            y: y,
            r: r
        };

        console.log('circle: ' + JSON.stringify(circle));

        return circle;
    }
}

export default CanvasInterface;
