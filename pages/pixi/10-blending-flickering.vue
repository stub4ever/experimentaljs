<template>
    <main>
        <div ref="PIXIAPP" class="hero">

        </div>
    </main>
</template>

<script>
    let PIXI = {};
    if (process.browser) {
        PIXI.core = require('pixi.js');
        PIXI.filters = require('pixi-filters');
    }

    export default {

        data() {
            return {
            }
        },
        mounted () {
            const app = new PIXI.core.Application({
                backgroundColor: 0xB8E5E1, // Add blue background
                resizeTo: this.$refs.PIXIAPP 
            });

            // Apply PIXI application to DOM element hero (our PIXI PIXIAPP)
            this.$refs.PIXIAPP.appendChild(app.view)
                            
            let campfireImage = PIXI.core.Sprite.from(require('~/assets/img/Winter-Campfire.jpg'));
            campfireImage.scale.x = 0.5; // scale X position by 50%
            campfireImage.scale.y = 0.5; // scale y position by 50%
            campfireImage.x = 50; // set x position of the image
            campfireImage.y = 50; // set y position of the image
            app.stage.addChild(campfireImage);

            let centerX = app.screen.width / 2; // Get the center X point of the app screen
            let centerY = app.screen.height / 2; // Get the center Y point of the app screen


            function createGradientTexture(){
                let canvas = document.createElement('canvas'); 
                canvas.width = app.screen.width; // same as screen height
                canvas.height = app.screen.height; // same as screen width
                let context = canvas.getContext('2d'); // work in 2d
                
                // Center the gradient in the center point of the circle
                // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient

                // Create a radial gradient
                // The inner circle is at x=centerX, y=centerY, with radius=0
                // The outer circle is at x=centerX, y=centerY, with radius=centerY
                let gradient = context.createRadialGradient(
                    centerX, centerY, 0,
                    centerX, centerY, centerY
                );

                // Add three color stops
                gradient.addColorStop(0.1, 'rgba(179, 112, 0, 0.7)');
                gradient.addColorStop(0.99, 'rgba(0, 0, 0, 0)');

                // Set the fill style and draw a rectangle
                context.fillStyle = gradient;
                context.fillRect(0, 0, 1100, 768);
                
                return PIXI.core.Texture.from(canvas);
            }

            let gradientTexture = createGradientTexture();

            let sprite = new PIXI.core.Sprite(gradientTexture);
            sprite.pivot.x = centerX; 
            sprite.pivot.y = centerY;
            sprite.x = centerX;
            sprite.y = centerY + 200 // change the position of the gradient sprite
            
            sprite.blendMode = PIXI.core.BLEND_MODES.ADD; // add blend mode to gradient to remove smudge

            app.stage.addChild(sprite);
            
            // Props to set anim ticker speed for each frame
            let animSpeed = 0;
            app.ticker.add(() => {
                // animSpeed += 0.2;
                animSpeed += randomAnimSpeed(0.005, 0.01);
                sprite.scale.x = 2 + Math.cos(animSpeed) * 0.07; // make sure that is scale 2 times than original + random speed
                sprite.scale.y = 2 + Math.cos(animSpeed) * 0.07;
            });

            function randomAnimSpeed(min, max){
                return Math.random() * (max - min + 1) + min; // return random number base on => max + min
            }


        },
        methods: {},
        
    }
</script>

<style lang="scss" scoped>
    main {
        background: black;
        height: 100vh;
        width: 100%;
    }

    .hero {
        height: 100%;
        width: 100%;
        max-height: 768px;
        max-width: 1100px; // PIXI application container is going to resize base on the this weight + height
        margin: 0 auto;
    }

</style>