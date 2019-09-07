<template>
    <main>
        <section ref="square"></section>
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
                // Two.js construction
                const params = {
                    width: 500,
                    height: 500
                }
                
                this.square.canvas = new Two(params).appendTo(this.$refs.square) // appeend two to this container

                this.square.shape = this.square.canvas.makeRectangle(this.square.x, this.square.y, this.square.width, this.square.height) // set offset 250 + size 100
                this.square.shape.fill = "#f9bc31" 
                this.square.shape.noStroke() 
                this.square.shape.rotation = Math.PI * .25 
                // Bind listen "update" with an functione with frame 60fps
                this.square.canvas.bind("update", () => this.square.shape.rotation += 0.05) // If use minus it will goes to another way
                // this.square.canvas.bind("update", () => {
                //     // add current rotation with small increment
                //     this.square.shape.rotation = this.square.shape.rotation + 0.05 
                // })
                this.square.canvas.play() 
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
