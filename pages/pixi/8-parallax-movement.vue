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

            // 1. Setup a container 
            const container = new PIXI.core.Container({
                resizeTo: this.$refs.PIXIAPP 
            });
            app.stage.addChild(container);
            container.interactive = true; // Set container interactive

            // S
            function setParallax(target, shiftX, shiftY){
                // Use movement event to bind parallax Movement function
                container.on('mousemove', parallaxMove.bind({
                    'target': target,  // access to target element
                    'rangeX': shiftX,
                    'maxX': target.x + (shiftX / 2), // get current X position + 1/2 shiftX position to get central point of shifting
                    'rangeY': shiftY,
                    'maxY': target.y + (shiftY / 2), // get current Y position + 1/2 shiftY position to get central point of shifting
                }));
            }

            function parallaxMove(event){
                var mouseX = event.data.global.x;
                var mouseY = event.data.global.y;
                var ratioX = this.rangeX / app.screen.width; 
                var ratioY = this.rangeY / app.screen.height; 
                this.target.position.x = this.maxX - (ratioX * mouseX); // when the mouse is go far over the right
                this.target.position.y = this.maxY - (ratioY * mouseY);
            }


            // 2. Setup an sprite for each images

            let clouds = PIXI.core.Sprite.from(require('~/assets/img/clouds.png'));
            clouds.scale.x = 0.5; // scale X position by 50%
            clouds.scale.y = 0.5; // scale y position by 50%
            clouds.x = 50; // set x position of the image
            clouds.y = 50; // set y position of the image
            container.addChild(clouds);
            setParallax(clouds, 5, 4);


            let hill = PIXI.core.Sprite.from(require('~/assets/img/hill.png'));
            container.addChild(hill);
            setParallax(hill, 25, 20);


            let people = PIXI.core.Sprite.from(require('~/assets/img/people.png'));
            container.addChild(people);
            setParallax(people, 25, 20);

            let text = PIXI.core.Sprite.from(require('~/assets/img/text.png'));
            container.addChild(text);
            setParallax(text, 35, 30);

            let trees = PIXI.core.Sprite.from(require('~/assets/img/trees.png'));
            container.addChild(trees);
            setParallax(trees, 50, 40);

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

        height: 668px;
        width: 668px; // PIXI application PIXIAPP is going to resize base on the this weight + height
        margin: 0 auto;
    }

</style>