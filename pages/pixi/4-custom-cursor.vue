<template>
    <main>
        <div ref="container" class="hero">
            <div class="text-component">
                <h1>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </h1>
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
            return {
            }
        },
        mounted () {
            const app = new PIXI.core.Application({
                backgroundColor: 0x1D1D1D,
                resizeTo: this.$refs.container 
            });
            
            this.$refs.container.appendChild(app.view)

            // Defining our cusom cursor
            // const customCursor = "url('"+require('~/assets/img/customcursor.png')+"', auto);"
            const customCursor = `url('${ cursorDot }'), auto`;

            // Target interactive manager to our cursor
            app.renderer.plugins.interaction.cursorStyles.default = customCursor;

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
        background-color: #343434;
        width: 100%;
        padding: var(--space-md);
        ///////////////////////////////
        pointer-events: none;           // => Remove native pointer when hover over text-component
        /////////////////////////////        
        > * {
            pointer-events: all; // All elements inside text-component display native pointer
        }

        h1 {
            color: white;
        }
    }

    

</style>