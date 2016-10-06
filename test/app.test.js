"use strict";

import {expect} from "chai";
import App from "../src/core/app.js";

describe("App", () => {
    it("shall exist", () => {
        let app = new App();

        expect(app).to.be.defined;
    });

    it("shall have a run method", () => {
        let app = new App();

        expect(app.run()).to.be.true;
    });
});
