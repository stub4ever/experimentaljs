// https://github.com/naokiishizuq/myWebPage/blob/master/production/src/modules/vehicle.js
class Flower {
    // create a p5 sketch as an object "instance"
    constructor(sketch, x, y) {
        // what do we need to setup a flower
        this.p5 = sketch;
        this.objs = window.store.objs; // store
        this.store = window.store;
        this.x = x
        this.y = y
    }

    // create draw method
    draw = () => {
        this.p5.fill('white')
        this.p5.square(this.x - 25, this.y  - 25 , 50)
        this.p5.noStroke()
        
        this.p5.fill('red')
        this.p5.circle(this.x, this.y, 10)
    }

    init = () => {
        console.log('flower init')
    }
}


// export module
export default Flower;
