<template>
    <main>
        <div ref="container" class="hero">

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
            // The application will create a renderer using WebGL, if possible,
            // with a fallback to a canvas render. It will also setup the ticker
            // and the root stage PIXI.Container
            const app = new PIXI.Application({
                // width: 1024, heigth: 768,  // We can remove this size since it resize to Hero styling
                backgroundColor: 0xffffff, // Add white background
                resizeTo: this.$refs.container // The element or window to resize the application to.
            });

            // Apply PIXI application to DOM element hero (our PIXI container)
            this.$refs.container.appendChild(app.view)


            // How to add text + image

            // Add text to element hero (our PIXI container)          
            let text = new PIXI.Text('Add some text to the stage')
            // the text is the child, add the text to the stage
            app.stage.addChild(text)    
            
            // Create an sprite for our image
            let image = PIXI.Sprite.from(require('~/assets/img/woman-jogging.jpg'))

            // Change the position of the image to prevent overlapping with the text
            image.x = 100
            image.y = 100 
            
            // the image is the child, add the text to the stage
            app.stage.addChild(image)    
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