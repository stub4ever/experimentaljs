<template>
    <main>
        <div ref="container" class="hero">

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
                resizeTo: this.$refs.container 
            });

            this.$refs.container.appendChild(app.view)

            // Load image black & white in before color
            const imgBW = PIXI.core.Sprite.from(require('~/assets/img/07.jpg'))
            app.stage.addChild(imgBW)    

            // Color Image Setup
            const imgColor = PIXI.core.Sprite.from(require('~/assets/img/07.jpg'))
            app.stage.addChild(imgColor) 

            const bwFilter = new PIXI.filters.AdjustmentFilter()
            // Set initial startpoint for the filter
            bwFilter.saturation = 0 // set the color to black and white
            bwFilter.gamma = 0.8; // set the amount of luminance
            imgBW.filters = [ bwFilter ]   

            const colorFilter = new PIXI.filters.AdjustmentFilter()
            // Set initial startpoint for the filter
            colorFilter.gamma = 1.5; // set the amount of luminance
            imgColor.filters = [ colorFilter ]

            // Constructor of the shape
            let maskRadius = 250; // Radius is always half of the width circle
            let maskBlur = 64;

            // const maskShape = new PIXI.core.Graphics() => Create a mask shape
            // maskShape.beginFill(0xfffff) => define the background color of the shape
            // maskShape.drawCircle() => Determine the draw of the shape 
            // maskShape.endFill() => Whenever using beginFill we need to use endFill

            //Add blurr outside the circle = adding together mask radius + mask blur. 
            let maskShape = new PIXI.core.Graphics().beginFill(0xffffff).drawCircle(maskBlur + maskRadius, maskBlur + maskRadius, maskRadius).endFill();
            maskShape.filters = [new PIXI.core.filters.BlurFilter(maskBlur)]; // Create Blur filter
            
            // Steps before turning the shape into sprite
            let maskBounds = new PIXI.core.Rectangle(0, 0, (maskBlur + maskRadius) * 2, (maskBlur + maskRadius) * 2);

            // (displayObject, scaleMode, resolution, region)
            // if the texture need to resize to reposition the px use this PIXI method SCALE_MODES.nearest.
            // let texture = app.renderer.generateTexture(maskShape, 0, 1, maskBounds);
            let texture = app.renderer.generateTexture(maskShape, PIXI.core.SCALE_MODES.NEAREST, 1, maskBounds);


            // add masker to our stage
            let masker = new PIXI.core.Sprite(texture)
            
            app.stage.addChild(masker)

            // Set the circle to act as a mask of the color image
            imgColor.mask = masker;

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