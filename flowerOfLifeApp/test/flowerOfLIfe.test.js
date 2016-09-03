'use strict';

var assert = require('chai').assert;
var FlowerOfLife = require('../app/scripts/flowerOfLife.js');

xdescribe('FlowerOfLife', function () {
    it('shall exist', function () {
        var fol = new FlowerOfLife(); 

        assert.notEqual(fol, undefined);
    });

    it('shall have the ability to render itself', function() {
        var fol = new FlowerOfLife(); 

        assert.equal(fol.render(), true);
    })
});
