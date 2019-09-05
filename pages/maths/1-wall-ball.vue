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
    let P5;
    if (process.browser) {
        P5 = require('p5');
        require('p5/lib/addons/p5.sound');
    }

    // Plugins
    import Util from '~/plugins/Util.js'
    // const sound1 = require('~/assets/audio/drop.mp3')

    
    export default {
        data: function () {
            return {
                script: null,
                canvas: null,
                x: 0,
                y: 0,
                element: null,
                sound: null,
            }
        },
        mounted () {
            this.initBall()
        },
        methods: {
            // https://github.com/processing/p5.js/issues/2646
            initBall() {
                this.script = (p5) => {
                    let startPosX 
                    let startPosY 
                    let speedX 
                    let speedY 
                    let radius 
                    // sound
                    let sound
            
                    // load the sound 
                    p5.preload = () => {
                        sound = p5.loadSound(require('~/assets/audio/drop.mp3'));
                        // here you can upload many as you want
                    }

                    p5.setup = () => {
                        this.canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
                        this.canvas.parent(this.$refs.canvas)
                        
                        startPosX = 300 
                        startPosY = 300 
                        speedX = 5
                        speedY = 5
                        radius = 50  

                        // apply this to make it work on chrome => it doesn't play sounds from the start
                        // https://github.com/processing/p5.js-sound/pull/322
                        // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
                    }

                    p5.draw = () => {
                        p5.background('#FFe44588') 
                        p5.circle(startPosX, startPosY, radius*2);  
                        p5.fill('#222222')

                        startPosX = startPosX + speedX 
                        startPosY = startPosY + speedY
                        if(startPosY > p5.windowHeight - radius || startPosY < radius ) {
                            speedY = speedY * -1
                            
                            sound.play() // play when it hit the edge of the screen 
                        }

                        if(startPosX > p5.windowWidth - radius || startPosX < radius ) {
                            speedX = speedX * -1

                            sound.play() // play when it hit the edge of the screen 
                        }

                        startPosX = p5.constrain(startPosX,radius, p5.windowWidth - radius)   
                        startPosY = p5.constrain(startPosY,radius, p5.windowHeight - radius)
                    }

                    p5.windowResized = () => {
                        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
                    }

                }

                this.element = new P5(this.script)
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
