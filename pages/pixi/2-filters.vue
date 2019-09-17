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
                backgroundColor: 0xffffff, // Add white background
                resizeTo: this.$refs.container // The element or window to resize the application to.
            });

            this.$refs.container.appendChild(app.view)

            let womanImg = PIXI.core.Sprite.from(require('~/assets/img/woman-jogging.jpg'))

            app.stage.addChild(womanImg)    

            let godrayFilter = new PIXI.filters.GodrayFilter()
            // Create our second filter with adjustment filter to modifier color balance of the img
            let colorFilter = new PIXI.filters.AdjustmentFilter()
            
            // Set initial startpoint for the filter
            godrayFilter.parallel = false // Set radiating out from central point => when this is false center is available
            godrayFilter.center = [400, 120] // set the position you wanna center (x,y)
            godrayFilter.lacunrity = 2.0 // The density of the fractal noise.
            godrayFilter.gain = 0.45 // General intensity of the effect.

            colorFilter.contrast = 1.2

            // Apply filter to womanImg
            // we can apply mutiple fitler to any element
            womanImg.filters = [
                godrayFilter,
                colorFilter 
            ]

            // animSpeed contol the speed of the animation for godrayFilter
            let animSpeed = 0;
            // Add animation with ticker that tick through animation frames and stages over time
            app.ticker.add(function() {
                animSpeed += 0.015 // increment
                godrayFilter.time = animSpeed // build in filter method called time
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