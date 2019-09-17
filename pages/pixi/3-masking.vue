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

            // Load image black & white in first 
            let imgBW = PIXI.core.Sprite.from(require('~/assets/img/07.jpg'))

            app.stage.addChild(imgBW)    

            let bwFilter = new PIXI.filters.AdjustmentFilter()
            
            // Set initial startpoint for the filter
            bwFilter.saturation = 0 // set the color to black and white

            imgBW.filters = [
                bwFilter 
            ]

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