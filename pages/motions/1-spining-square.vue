<template>
    <main>
        <section ref="square"></section>
    </main>
</template>

<script>
    // Plugins
    import Util from '~/plugins/Util.js'
    import Two from 'two.js' 
    import Square from '@/modules/motions/1-Square.js'

    export default {
        components: {
            
        },
        data() {
            return {
                canvas: null,
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
                this.canvas = new Two(params).appendTo(this.$refs.square) // appeend two to this container
                
                const square = new Square(this.canvas, 250, 250, 100, 100)
                square.init()

                this.canvas.play() 
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
