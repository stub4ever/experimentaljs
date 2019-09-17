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

            let womanImg = PIXI.core.Sprite.from(require('~/assets/img/woman-jogging.jpg'))

            app.stage.addChild(womanImg)    

            let godrayFilter = new PIXI.filters.GodrayFilter()
            let colorFilter = new PIXI.filters.AdjustmentFilter()
            
            // Set initial startpoint for the filter
            godrayFilter.parallel = false 
            godrayFilter.center = [400, 120] 
            godrayFilter.lacunrity = 2.0 
            godrayFilter.gain = 0.45 

            colorFilter.contrast = 1.2

            womanImg.filters = [
                godrayFilter,
                colorFilter 
            ]

            let animSpeed = 0;

            app.ticker.add(function() {
                animSpeed += 0.015 
                godrayFilter.time = animSpeed 
            })

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