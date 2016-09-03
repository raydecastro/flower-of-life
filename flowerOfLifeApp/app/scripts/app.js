'use strict';

var love = love || {};

(function(namespace) {
    namespace.App = App;

    function App() {
        this.love = 'the most powerful force in the universe.';
    }

    App.prototype.run = function() {     
        const flower = new love.FlowerOfLife();
        flower.render();   
        console.log('.love> is ' + this.love);

        return true;
    };

    module.exports = App;

})(love);
