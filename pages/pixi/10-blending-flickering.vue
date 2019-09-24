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

            // 1. Setup props 
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
                gradient.addColorStop(0.1, '#ff9a44');
                gradient.addColorStop(0.99, '#fc6076');
                gradient.addColorStop(1, '#1d1d1d');

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
            sprite.y = centerY;
            app.stage.addChild(sprite);

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