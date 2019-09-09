<template>
<section>
    <!-- Here comes drawing area -->
    <div ref="canvas"></div>
</section>
</template>

<script>
import Flower from '@/modules/maths/Flower.js';

export default {
    data() {
        return {
            canvas: {
                p5: null,
                created: null,
                script: null,
                el: null,
                // Set state to pass each indivual
                hue: null,
            },
            flowers: [],
        }
    },
    mounted() {
        this.initCanvas()
    },
    methods: {
        initCanvas() {
            this.canvas.el = this.$refs.canvas
            const P5 = require("p5");

            this.canvas.script = (sketch) => {
                window.store = {}; // to communicate between vuejs and p5js
                window.store.objs = []; // list of all objects on canvas
                let _flower = {}; // Flower interactions

                sketch.setup = () => {
                    this.canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight).parent(this.canvas.el)
                    this.canvas.background('#000');

                    this.hue = sketch.random(0,100) // Set here random number
                }

                sketch.draw = () => {
                    this.flowers.forEach(flower => {
                        flower.draw() 
                    });
                }
                
                // When we click then it will update the hue every single time.
                sketch.mouseDragged = () => {
                    // this will never go back to the starts again. when it hit 0 it stops. 
                    // Change after the plus a different number to change the speed of drawing
                    this.hue = this.hue + 1 
                    
                    if (this.hue > 100) { // set this state to reset 0 when hue is bigger then 100
                        this.hue = 0
                    }
                    
                    // Inside the parameter add the state hue to apply this state to each Flower
                    this.flowers.push(_flower = new Flower(sketch, sketch.mouseX, sketch.mouseY, this.hue))
                }
            }

            this.canvas.p5 = new P5(this.canvas.script)
        },
    },
}
</script>

<style lang="scss" scoped>
// Prevent no space between gap of the page
canvas {
    vertical-align: bottom;
}
</style>
