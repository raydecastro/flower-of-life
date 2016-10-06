class Canvas {
    constructor() {
        this.canvas = document.getElementById("flower-of-life");
        this.context = this.canvas.getContext("2d");
        this.context.strokeStyle = 'blue';
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

export default Canvas; 