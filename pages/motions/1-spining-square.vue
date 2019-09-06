<template>
    <main>
        <section data-ref="square"></section>
    </main>
</template>

<script>
    // Plugins
    import Util from '~/plugins/Util.js'
    import Two from 'two.js' 


    
    export default {
        components: {
            
        },
        mounted() {
            this.initSquare()
        },
        data() {
            return {
                square: {
                    ref: '[data-ref="square"]',
                    canvas: null,
                    shape: null,
                    width: 100,
                    height: 100,
                    x: 250,
                    y: 250,
                }
            }
        },
        methods: {

            // https://markus.oberlehner.net/blog/implementing-the-builder-pattern-in-vue-forms/
            
            // https://inventi.studio/en/blog/vuejs-with-constructor-pattern
            // https://stackoverflow.com/questions/52708719/how-to-reuse-es6-class-in-vue-js
            
            initSquare: function() {

                // Create a tag to do our code 
                const container = document.querySelector(`${this.square.ref}`)
                
                // Two.js construction
                const params = {
                    width: 500,
                    height: 500
                }
                
                // a new instance of two where params is a javascript object
                this.square.canvas = new Two(params).appendTo(container) // appeend two to this container

                // Draws a rectangle to the instance's drawing space where x, y are 
                // the x, y values for the center point of the rectangle and width, 
                // height represents the width and height of the rectangle
                // makeRectangle two.makeRectangle(x, y, width, height);
                this.square.shape = this.square.canvas.makeRectangle(this.square.x, this.square.y, this.square.width, this.square.height) // set offset 250 + size 100
                this.square.shape.fill = "#f9bc31" // fill a shape color
                this.square.shape.noStroke() // remove stroke

                this.square.canvas.play() // play this object "two" animation
            }
        }
    }
</script>

<style lang="scss" scoped>
    body {
        background-color: #FFe8b4; 
    }

    section {
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
