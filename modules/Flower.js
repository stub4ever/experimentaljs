// https://github.com/naokiishizuq/myWebPage/blob/master/production/src/modules/vehicle.js
class Flower {
    // create a p5 sketch as an object "instance"
    constructor(sketch, x, y, id) {
        // what do we need to setup a flower
        this.p5 = sketch;
        this.objs = window.store.objs; // store
        this.store = window.store;
        this.id = id
        this.x = x
        this.y = y

        this.p5.noStroke()
        this.p5.fill('red')
        // set mouse X and Y clicked
        // set in the middle of the square base on the size of square
        this.p5.square(this.x - 25, this.y  - 25 , 50)
    }

    init = () => {
        console.log('flower init')
        console.log(this.objs, this.store)
    }
}


// export module
export default Flower;
