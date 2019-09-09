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
        data() {
            return {
                canvas: null,

                square: {
                    numberOfShapes: 12,
                    el: null,
                    x: 0,
                    y: 250,
                    width: 20,
                    height: 20
                }
                
            }
        },
        mounted() {
            this.initCanvas()
        },
        methods: {
            initCanvas: function() {
                // Two.js construction
                const params = {
                    width: 500,
                    height: 500
                }
                this.canvas = new Two(params).appendTo(this.$refs.canvas) // appeend two to this container
                
                for (let index = 0; index < this.square.numberOfShapes; index++) {
                    this.square.x = index * 30 + 30// Add plus 30 space to the right for each start position of square by 30 space
                    this.square.y = 250    
                    
                    this.square.el = new Square(this.canvas, this.square.x, this.square.y, this.square.width, this.square.height)
                    this.square.el.play()
                }
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
