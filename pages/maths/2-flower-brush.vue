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
                }

                sketch.draw = () => {
                    this.flowers.forEach(flower => {
                        flower.draw() 
                    });
                }

                sketch.mouseClicked = () => {
                    this.flowers.push(_flower = new Flower(sketch, sketch.mouseX, sketch.mouseY))
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
