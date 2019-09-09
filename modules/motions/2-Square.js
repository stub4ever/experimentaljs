class Square {
    // create a two sketch as an object "instance"
    constructor(two, x, y, width, height) {
        this.canvas = two;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.init();
    }

    init = () => {
        this.shape = this.canvas.makeRectangle(this.x, this.y, this.width, this.height) // set offset 250 + size 100
        this.shape.noStroke();
        this.shape.fill = "#f9bc31"
    }

    play = () => {
        this.canvas.play() 
    }
}

// export module
export default Square;
