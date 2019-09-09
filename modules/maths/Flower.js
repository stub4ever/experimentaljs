// https://github.com/naokiishizuq/myWebPage/blob/master/production/src/modules/vehicle.js
class Flower {
    // create a p5 sketch as an object "instance"
    constructor(sketch, x, y, hue) {
        // what do we need to setup a flower
        this.p5 = sketch;
        this.objs = window.store.objs; // store
        this.store = window.store;
        this.x = x
        this.y = y
        this.hue = hue // this.p5.random(100)
        
        // Setup a random midsize
        this.midSize = this.p5.random(20,40)
    }

    // Create draw method
    draw = () => {
        // What do we need to do to draw a flower
		this.p5.colorMode(this.p5.HSB, 100)
        this.p5.noStroke()
        this.p5.fill(this.hue, 100, 100) 
        this.p5.circle(this.x, this.y, this.midSize)
    }

    init = () => {
        console.log('flower init')
    }
}


// export module
export default Flower;
