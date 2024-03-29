class Square {
    // create a two sketch as an object "instance"
    constructor(two, group, x, y, width, height, angle) {
        this.canvas = two;
        this.group = group;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;

        this.init();
    }

    init = () => {
        this.makeRectangle();
        
        // add to group
        this.group.add(this.shape)
    }

    makeRectangle = () => {
        this.shape = this.canvas.makeRectangle(this.x, this.y, this.width, this.height, this.angle) 
        this.shape.noStroke()
        this.shape.fill = "#f9bc31"
    }

    // We are calling the rotation method from the parent
    rotation = () => {
        this.shape.rotation += 0.025
    }

    play = () => {
        this.canvas.play() 
    }
}

// export module
export default Square;
