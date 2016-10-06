import FlowerOfLife from './flowerOfLife';

class App {
    constructor() {
        this.love = "the most powerful force in the universe.";
    }

    run() {
        const flower = new FlowerOfLife();
        flower.render();   

        console.log(".love> is " + this.love);
        return true; 
    }
}

export default App;
