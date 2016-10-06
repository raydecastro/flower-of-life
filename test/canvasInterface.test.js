"use strict";

import {expect} from "chai";
import CanvasInterface from "../src/core/canvasInterface.js";

describe("CanvasInterface", () => {
    it("shall exist", () => {
        let canvas = new CanvasInterface();

        expect(canvas).to.be.defined;
    });

    it("shall have a drawCircle() method", () => {
        let canvas = new CanvasInterface();
        let expectedCircle = {
            x: 10,
            y: 20,
            r: 30
        };

        expect(canvas.drawCircle(expectedCircle.x, expectedCircle.y, expectedCircle.r)).to.deep.equal(expectedCircle);
    });
});
