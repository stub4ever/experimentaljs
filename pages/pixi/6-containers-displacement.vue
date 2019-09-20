<template>
<main>

    <!-- Add google fontface to apply inside pixiJS  -->
    <link href="https://fonts.googleapis.com/css?family=Raleway|Playfair+Display" rel="stylesheet">

    <div ref="PIXIAPP" class="hero">
        <div class="text-component">
            <h1></h1>
        </div>
    </div>
</main>
</template>

<script>
let PIXI = {};
if (process.browser) {
    PIXI.core = require('pixi.js');
    PIXI.filters = require('pixi-filters');
}

import cursorDot from '~/assets/img/customcursor.png';

export default {
    data() {
        return {}
    },
    mounted() {
        const app = new PIXI.core.Application({
            backgroundColor: 0x1D1D1D,
            resizeTo: this.$refs.PIXIAPP
        });

        this.$refs.PIXIAPP.appendChild(app.view)

        const customCursor = `url('${ cursorDot }'), auto`;

        app.renderer.plugins.interaction.cursorStyles.default = customCursor;

        // 1. Setup a container 
        const container = new PIXI.core.Container();
        app.stage.addChild(container);

        // 2. Apply background image on the container
        let bgImg = PIXI.core.Sprite.from(require('~/assets/img/abstract-polygon.jpg'));
        container.addChild(bgImg);

        // 3. Adjust filter color on background image of the container
        let adjustmentFilter = new PIXI.filters.AdjustmentFilter();
        adjustmentFilter.red = 1;
        adjustmentFilter.green = 0.1;
        adjustmentFilter.blue = 1;

        bgImg.filters = [adjustmentFilter]; // Apply filter

        const style01 = new PIXI.core.TextStyle({
            fontFamily: 'Raleway',
            fontSize: 62,
            fontStyle: 'italic',
            fill: ['#ffffff', '#eeeeee'],
            stroke: '#ffffff',
            strokeThickness: 1,
            dropShadow: true,
            dropShadowAlpha: 1,
            dropShadowColor: '#000000',
            dropShadowBlur: 12,
            dropShadowDistance: 10
        });

        const style02 = new PIXI.core.TextStyle({
            fontFamily: 'Playfair Display',
            fontSize: 150,
            fontWeight: 'bold',
            fill: '#DC0038',
            stroke: '#4D091C',
            strokeThickness: 3,
            letterSpacing: 4,
            dropShadow: true,
            dropShadowAlpha: 0.75,
            dropShadowColor: '#000000',
            dropShadowBlur: 12,
            dropShadowDistance: 10
        });

        let text01 = new PIXI.core.Text('Text Styling in 01', style01);
        text01.x  = app.screen.width / 2 - text01.width / 2; 
        text01.y = app.screen.height / 2 - text01.height / 2 - 58; 
        app.stage.addChild(text01); 

        let text02 = new PIXI.core.Text('PixiJS', style02);
        text02.x  = app.screen.width / 2 - text02.width / 2;
        text02.y = app.screen.height / 2 - text02.height / 2 + 58; 
        app.stage.addChild(text02);


        // 4. Add load displace Image
        let displacementSprite = PIXI.core.Sprite.from(require('~/assets/img/displace.png'));
        // scale displacement Sprite by 2
        displacementSprite.scale.x = 2;
        displacementSprite.scale.y = 2;
        displacementSprite.anchor.set(.5); // Set anchor in middle of radius
        app.stage.addChild(displacementSprite);

        let displacementFilter = new PIXI.core.filters.DisplacementFilter(displacementSprite);
        displacementFilter.scale.x = 100;
        displacementFilter.scale.y = 100;
        container.filters = [displacementFilter];

        // 5. Create interative Displacement Filter on Sprite when moving mouse
        app.stage.interactive = true;
        app.stage.on('mousemove', onMouseMove);
        function onMouseMove(event){
            displacementSprite.position.set(event.data.global.x, event.data.global.y);
        }

        // https://github.com/tutsplus/up-and-running-with-pixijs/tree/master/projects
    },
    methods: {},

}
</script>

<style lang="scss" scoped>
main {
    background: black;
    // height: 100vh;
    width: 100%;
}

.hero {
    position: relative;
    height: 100%;
    width: 100%;
    height: 768px;
    max-width: 1100px; // PIXI application container is going to resize base on the this weight + height
    margin: 0 auto;
}

.hero .text-component {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: var(--space-md);
    ///////////////////////////////
    pointer-events: none; // => Remove native pointer when hover over text-component

    /////////////////////////////        
    >* {
        pointer-events: all; // All elements inside text-component display native pointer
    }

    h1 {
        color: white;
    }
}
</style>
