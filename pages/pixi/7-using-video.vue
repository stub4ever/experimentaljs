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

            // First video setup
            let hexOrangeVideo = document.createElement('video');
            hexOrangeVideo.src = require('~/assets/video/hexorange.mp4') 
            hexOrangeVideo.preload = true;
            hexOrangeVideo.autoplay = true;
            hexOrangeVideo.muted = true; // Has to be muted to eneable autoplay
            hexOrangeVideo.loop = true; // enable loop

            let hexOrangeVideoTexture = PIXI.core.Texture.from(hexOrangeVideo); // convert video in a texture

            let hexOrangeVideoSprite = new PIXI.core.Sprite(hexOrangeVideoTexture); // convert video texture into a sprite
            hexOrangeVideoSprite.width = app.screen.width; // resize width video sprite base on the app canvas
            hexOrangeVideoSprite.height = app.screen.height;
            
            app.stage.addChild(hexOrangeVideoSprite); // when having a video sprite we can add it to the stage

            // Second video setup
            let circleVideo = document.createElement('video');
            circleVideo.src = require('~/assets/video/3dcircle.mp4') 
            circleVideo.preload = true;
            circleVideo.autoplay = true;
            circleVideo.muted = true; // Has to be muted to eneable autoplay
            circleVideo.loop = true; // enable loop

            let circleVideoTexture = PIXI.core.Texture.from(circleVideo); // convert video in a texture

            let circleVideoSprite = new PIXI.core.Sprite(circleVideoTexture); // convert video texture into a sprite
            circleVideoSprite.width = app.screen.width; // resize width video sprite base on the app canvas
            circleVideoSprite.height = app.screen.height;
            
            app.stage.addChild(circleVideoSprite); // when having a video sprite we can add it to the stage


            let maskShape = new PIXI.core.Graphics().beginFill(0xffffff).drawCircle(maskBlur + maskRadius, maskBlur + maskRadius, maskRadius).endFill();
            maskShape.filters = [new PIXI.core.filters.BlurFilter(maskBlur)]; // Create Blur filter
            
            let maskBounds = new PIXI.core.Rectangle(0, 0, (maskBlur + maskRadius) * 2, (maskBlur + maskRadius) * 2);

            let texture = app.renderer.generateTexture(maskShape, PIXI.core.SCALE_MODES.NEAREST, 1, maskBounds);


            // add masker to our stage
            let masker = new PIXI.core.Sprite(texture)
            
            app.stage.addChild(masker)

            // Set the circle to act as a mask of the first hexo orange video
            circleVideoSprite.mask = masker;

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