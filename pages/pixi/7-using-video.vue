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
                backgroundColor: 0xffffff,
                resizeTo: this.$refs.PIXIAPP 
            });

            this.$refs.PIXIAPP.appendChild(app.view)

            // Constructor of the shape
            let maskRadius = 250; // Radius is always half of the width circle
            let maskBlur = 64;

            let maskShape = new PIXI.core.Graphics().beginFill(0xffffff).drawCircle(maskBlur + maskRadius, maskBlur + maskRadius, maskRadius).endFill();
            maskShape.filters = [new PIXI.core.filters.BlurFilter(maskBlur)]; // Create Blur filter
            
            let maskBounds = new PIXI.core.Rectangle(0, 0, (maskBlur + maskRadius) * 2, (maskBlur + maskRadius) * 2);

            let texture = app.renderer.generateTexture(maskShape, PIXI.core.SCALE_MODES.NEAREST, 1, maskBounds);


            // add masker to our stage
            let masker = new PIXI.core.Sprite(texture)
            
            app.stage.addChild(masker)

            // Set the circle to act as a mask of the color image
            // imgColor.mask = masker;

            app.stage.interactive = true; // is by default false
            app.stage.on('mousemove', moveMask);

            function moveMask(event){
                // Set Mouse movement on the middlepoint of circle of the cursor
                masker.position.x = event.data.global.x - masker.width / 2; 
                masker.position.y = event.data.global.y - masker.height / 2;
            }

            // https://github.com/tutsplus/up-and-running-with-pixijs/tree/master/projects
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