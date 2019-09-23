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