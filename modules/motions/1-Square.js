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
        this.shape.fill = "#f9bc31" 
        this.shape.noStroke() 
        this.shape.rotation = Math.PI * .25 
        this.canvas.bind("update", () => this.shape.rotation += 0.05) // If use minus it will goes to another way

        console.log('Square init')
    }
}

// export module
export default Square;
