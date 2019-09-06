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
                ball: {
                    script: null,
                    canvas: null,
                    radius: 0,
                    x: 0,
                    y: 0,
                    speedX:0,
                    speedY:0,
                    element: null,
                    sound: null,
                }
            }
        },
        mounted () {
            this.initBall()
        },
        methods: {
            // https://github.com/processing/p5.js/issues/2646
            initBall() {
                this.ball.script = (p5) => {
                    // load the sound 
                    p5.preload = () => {
                        this.ball.sound = p5.loadSound(require('~/assets/audio/drop.mp3'));
                    }

                    p5.setup = () => {
                        this.canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
                        this.canvas.parent(this.$refs.canvas)
                        this.ball.x = 300 
                        this.ball.y = 300 
                        this.ball.speedX = 5
                        this.ball.speedY = 5
                        this.ball.radius = 50  

                        // apply this to make it work on chrome => it doesn't play sounds from the start
                        // https://github.com/processing/p5.js-sound/pull/322
                        // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
                    }

                    p5.draw = () => {
                        p5.background('#FFe44588') 
                        p5.circle(this.ball.x, this.ball.y, this.ball.radius*2);  
                        p5.fill('#222222')

                        this.ball.x = this.ball.x + this.ball.speedX 
                        this.ball.y = this.ball.y + this.ball.speedY
                        if(this.ball.y > p5.windowHeight - this.ball.radius || this.ball.y < this.ball.radius ) {
                            this.ball.speedY = this.ball.speedY * -1
                            
                            this.ball.sound.play() // play when it hit the edge of the screen 
                        }

                        if(this.ball.x > p5.windowWidth - this.ball.radius || this.ball.x < this.ball.radius ) {
                            this.ball.speedX = this.ball.speedX * -1

                            this.ball.sound.play() // play when it hit the edge of the screen 
                        }

                        this.ball.x = p5.constrain(this.ball.x,this.ball.radius, p5.windowWidth - this.ball.radius)   
                        this.ball.y = p5.constrain(this.ball.y,this.ball.radius, p5.windowHeight - this.ball.radius)
                    }

                    p5.windowResized = () => {
                        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
                    }

                }

                this.ball.element = new P5(this.ball.script)
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
