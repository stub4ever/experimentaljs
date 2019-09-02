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
                    this.x = window.innerWidth
                    this.y = window.innerHeight

                    p5.setup = () => {
                        this.canvas = p5.createCanvas(this.x , this.y)
                        this.canvas.parent(this.$refs.canvas)
                    }

                    p5.draw = () => {
                        // Each time when move my mouse over the canvas I draw a frame. Base on this order it add first the background > circle > fill = repeat
                        // This will prevent repeatable circle on the frame when move mouse
                        p5.background('#FFe44588') // add apha channel by 2 hexnumber => to get trail effects on the circle => the higher the number the faster response
                        p5.circle(p5.mouseX, p5.mouseY, 20);
                        p5.fill('#222222')
                    }
                }

                this.element = new P5.lib(this.script)
            }
        },
    }
</script>

<style lang="scss" scoped>
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
