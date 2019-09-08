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

        // Set hue random setup
        this.hue = {
            circle: this.p5.random(100), // add random p5 method
            square: this.p5.random(100) 
        }
    }

    // Create draw method
    draw = () => {
        // What do we need to do to draw a flower

        // In photoshop it goes from (H = 0 - 360 , S=0, B=0)
		// Apply colorMode 
		this.p5.colorMode(this.p5.HSB, 100)

        this.p5.fill(this.hue.circle, 100, 100) // Change first color HUE
        this.p5.square(this.x - 25, this.y  - 25 , 50)
        this.p5.noStroke()
        
        this.p5.fill(this.hue.square, 100, 100) // Change first color HUE
        this.p5.circle(this.x, this.y, 10)
    }

    init = () => {
        console.log('flower init')
    }
}


// export module
export default Flower;
