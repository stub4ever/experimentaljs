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
        this.hue = hue 
        this.midSize = this.p5.random(20,40)

        // Setup Alpha
        this.alpha  = 100 // if remove this this line and keep two line on the bottom this state doesn't update
    }

    // Create draw method
    draw = () => {
        // What do we need to do to draw a flower
		this.p5.colorMode(this.p5.HSB, 100)
        this.p5.noStroke()
        this.p5.fill(this.hue, 100, 100, this.alpha)  // Add the 4th value inside this parameter if passed 50 = 50% opacity
        this.p5.circle(this.x, this.y, this.midSize)

        this.alpha = this.alpha - 1 // this will fade-out from 100. Its going to reduce each time by minus 1
        this.midSize = this.midSize + 1 // This will increase the midsize by
    }

    init = () => {
        console.log('flower init')
    }
}


// export module
export default Flower;
