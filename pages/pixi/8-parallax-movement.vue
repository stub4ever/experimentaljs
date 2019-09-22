<template>
    <main>
        <div ref="PIXIAPP" class="hero">

        </div>
    </main>
</template>

<script>
    let PIXI;
    if (process.browser) {
        PIXI = require('pixi.js');
    }

    export default {

        data() {
            return {
            }
        },
        mounted () {
            const app = new PIXI.Application({
                backgroundColor: 0xffffff, // Add white background
                resizeTo: this.$refs.PIXIAPP // The element or window to resize the application to.
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
        max-width: 1200px; // PIXI application PIXIAPP is going to resize base on the this weight + height
        margin: 0 auto;
    }

</style>