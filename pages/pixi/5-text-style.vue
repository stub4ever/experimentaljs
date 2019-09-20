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

        // Defining our cusom cursor
        const customCursor = `url('${ cursorDot }'), auto`;

        // Target interactive manager to our cursor
        app.renderer.plugins.interaction.cursorStyles.default = customCursor;

        // 2. Setup the font-face secondly

        // Setup font style 01
        const style01 = new PIXI.core.TextStyle({
            fontFamily: 'Raleway',
            fontSize: 62,
            fontStyle: 'italic',
            fill: ['#ffffff', '#eeeeee'],
            stroke: '#ffffff',
            strokeThickness: 1,
            // Drop shadow props
            dropShadow: true,
            dropShadowAlpha: 1,
            dropShadowColor: '#000000',
            dropShadowBlur: 12,
            dropShadowDistance: 10
        });

        // Setup font style 02
        const style02 = new PIXI.core.TextStyle({
            fontFamily: 'Playfair Display',
            fontSize: 150,
            fontWeight: 'bold',
            fill: '#DC0038',
            stroke: '#4D091C',
            strokeThickness: 3,
            letterSpacing: 4,
            // Drop shadow props
            dropShadow: true,
            dropShadowAlpha: 0.75,
            dropShadowColor: '#000000',
            dropShadowBlur: 12,
            dropShadowDistance: 10
        });

        // 1. Set the text first 
        let text01 = new PIXI.core.Text('Text Styling in 01', style01);
        text01.x  = app.screen.width / 2 - text01.width / 2; // Center X of the text 
        text01.y = app.screen.height / 2 - text01.height / 2 - 58; // Center Y of the text then minus 58px to top
        app.stage.addChild(text01); // Add this layer to stage

        let text02 = new PIXI.core.Text('PixiJS', style02);
        text02.x  = app.screen.width / 2 - text02.width / 2;
        text02.y = app.screen.height / 2 - text02.height / 2 + 58; // Center Y of the text then push 58px to bottom
        app.stage.addChild(text02);


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
    max-width: 600px; // PIXI application container is going to resize base on the this weight + height
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
