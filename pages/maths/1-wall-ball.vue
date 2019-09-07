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
                    element: null,
                    sound: null,
                    radius: 50,
                    pos: {
                        x: 300,
                        y: 300,
                    },
                    speed: {
                        x: 5,
                        y: 5
                    }
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
                    let position 
                    let speed 
                    
                    // load the sound 
                    p5.preload = () => {
                        this.ball.sound = p5.loadSound(require('~/assets/audio/drop.mp3'));
                    }

                    p5.setup = () => {
                        this.canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
                        this.canvas.parent(this.$refs.canvas)

                        position = p5.createVector(this.ball.pos.x, this.ball.pos.y) 
                        speed = p5.createVector(this.ball.speed.x, this.ball.speed.y) 
                        
                        // apply this to make it work on chrome => it doesn't play sounds from the start
                        // https://github.com/processing/p5.js-sound/pull/322
                        // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
                    }

                    p5.draw = () => {
                        p5.background('#FFe44588') 
                        p5.circle(position.x, position.y, this.ball.radius*2);  
                        p5.fill('#222222')

                        position.add(speed) 
                        speed.mult(1) 

                        if(position.y > p5.windowHeight - this.ball.radius || position.y < this.ball.radius ) {
                            speed.y = speed.y * -1
                            
                            this.ball.sound.play() 
                        }

                        if(position.x > p5.windowWidth - this.ball.radius || position.x < this.ball.radius ) {
                            speed.x = speed.x * -1

                            this.ball.sound.play()
                        }

                        position.x = p5.constrain(position.x,this.ball.radius, p5.windowWidth - this.ball.radius)   
                        position.y = p5.constrain(position.y,this.ball.radius, p5.windowHeight - this.ball.radius)
                    }

                    // When we clicked change the angle of direction random
                    p5.mouseClicked = () => {   
                        // everytime when we click we get an random number
                        let angle = p5.random(p5.TWO_PI)
                        // Change angle of rotation
                        speed.rotate(angle)
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
