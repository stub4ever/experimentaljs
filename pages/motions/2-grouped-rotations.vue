<template>
<main>
    <section ref="canvas"></section>
</main>
</template>

<script>
// Plugins
import Util from '~/plugins/Util.js'
import Two from 'two.js'
import Square from '@/modules/motions/2-Square.js'

export default {
    components: {

    },
    computed: {
        // Full rotation
        // In radians, handy to store these in readable variable
        fullRotation() {
            return (Math.PI * 2)
        },

        // Half rotation
        fullRotation() {
            return Math.PI 
        }
    },
    data() {
        return {
            canvas: null,

            square: {
                numberOfShapes: 12,
                shapes: [],
                el: null,
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                plotRadius: 200
            }

        }
    },
    mounted() {
        this.initCanvas()
    },
    methods: {
        initCanvas: function () {
            // UTIL
            
            // Rotations
            // In radians, handy to store these in readable variable
            const fullRotation = Math.PI * 2 
            const halfRotation = Math.PI     

            // Two.js construction
            const params = {
                width: 500,
                height: 500
            }
            this.canvas = new Two(params).appendTo(this.$refs.canvas)

            for (let index = 0; index < this.square.numberOfShapes; index = index + 1) {
                // Define the angle
                 // 2pi * index / TotalNumber => now we can get the X + Y direction
                this.square.angle = fullRotation * index / this.square.numberOfShapes
                
                // Define cos direction => radius * cos(angle)
                this.square.x = (params.width / 2) + this.square.plotRadius * Math.cos(this.square.angle) 
                
                // Define sin angle => radius * sin(angle)
                this.square.y = (params.width / 2) + this.square.plotRadius * Math.sin(this.square.angle)

                // 1. Add state angle to each individual square
                // 2. Push every object inside the array => to have the access outside this loop
                this.square.shapes.push(this.square.el = new Square(this.canvas, this.square.x, this.square.y, this.square.width, this.square.height, this.square.angle))
                
                // Play each square element
                this.square.el.play()
            }

            // bind two.bind(event, callback);
            // Bind an event, string, to a callback function. Passing "all" will bind the callback to all events.
            this.canvas.bind("update", () => {
                // 1. Everytime when it update the frame change each element in rotation 
                // 2. This approach allow to apply outside the scope
                this.square.shapes.forEach((shape) => {
                    shape.rotation()
                });
            });


            // this.canvas.bind('update', test())

            // function test() {
            //     console.log('test')
            // }

        }
    }
}
</script>

<style lang="scss" scoped>
section {
    background-color: #FFe8b4;

    // Size of the drawing area
    width: 500px;
    height: 500px;

    // Fixed center center
    position: fixed;
    top: 50%;
    left: 50%;
    // Shift itself over by 50% of its width and height
    transform: translate(-50%, -50%);
}
</style>
