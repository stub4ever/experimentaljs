<template>
    <main>
        <section>
            <!-- Here comes drawing area -->
            <div ref="canvas"></div>
        </section>

    </main>
</template>

<script>
    // Using a plugin that accesses the window object immediately they are imported
    // https://medium.com/@codebeast_/why-your-third-party-plugin-dont-work-in-nuxt-and-how-to-fix-it-d1a8caadf422
    let P5 = {};
    if (process.browser) {
        P5.lib = require('p5/lib/p5.min.js');
        // P5.lib.sound = require('p5/lib/addons/p5.sound.min.js');        
    }

    // Plugins
    import Util from '~/plugins/Util.js'
    
    export default {
        data: function () {
            return {
                script: null,
                canvas: null,
                x: 0,
                y: 0,
                element: null,
            }
        },
        mounted () {
            this.initBall()
        },
        methods: {
            // https://github.com/processing/p5.js/issues/2646
            initBall() {
                this.script = p5 => {
                    let startPosX 
                    let startPosY 
                    let speedX // 5px per frame
                    let speedY // 5px per frame

                    p5.setup = () => {
                        this.canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
                        this.canvas.parent(this.$refs.canvas)
                        
                        startPosX = 300 
                        startPosY = 300 
                        speedX = 5
                        speedY = 5
                    }

                    p5.draw = () => {
                        p5.background('#FFe44588') 
                        p5.circle(startPosX, startPosY, 20); 
                        p5.fill('#222222')
                        
                        // Increase the speed per frame on the circle to make a movement
                        startPosX = startPosX + speedX // everytime it draw it takes the speed from speedX increment
                        startPosY = startPosY + speedY
                    }

                    p5.windowResized = () => {
                        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
                    }
                }

                this.element = new P5.lib(this.script)
            }
        },
    }
</script>

<style lang="scss" scoped>
    // Prevent a underline gap in canvas
    canvas {
        vertical-align: bottom;
    }

    section {
        background: #FFe8b4; 
        // Size of the drawing area
        width: 100%;
        height: 100%;

        // Fixed center center
        position: fixed;
        top: 50%;
        left: 50%;
         // Shift itself over by 50% of its width and height
        transform: translate(-50%, -50%);
    }

</style>
