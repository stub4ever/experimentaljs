// https://github.com/naokiishizuq/myWebPage/blob/master/production/src/modules/vehicle.js
class Square {
    // create a two sketch as an object "instance"
    constructor(two, x, y, width, height) {
        this.canvas = two;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.shape = this.canvas.makeRectangle(this.x, this.y, this.width, this.height) // set offset 250 + size 100

    }

    init = () => {
        this.canvas.play() 
    }
}

// export module
export default Square;
