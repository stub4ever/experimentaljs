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
                    // Apply canvas to get whole window size
                    this.x = window.innerWidth
                    this.y = window.innerHeight

                    // Canvas is by default 100 by 100 when not creating canvas
                    p5.setup = () => {
                        this.canvas = p5.createCanvas(this.x , this.y)
                        this.canvas.parent(this.$refs.canvas)
                    }

                    // Add events on draw X and Y mouse movement
                    p5.draw = () => {
                        p5.circle(p5.mouseX, p5.mouseY, 20);
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
