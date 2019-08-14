<template>
    <main>
        <section>
            <!-- Here comes drawing area -->
        </section>
    </main>
</template>

<script>
    // Plugins
    import Util from '~/plugins/Util.js'
    
    export default {
        components: {
            
        },
        mounted() {
            // Init object slider
            const ball = document.querySelectorAll('[data-ball-target]');
            if( ball.length > 0) {
                for( var i = 0; i < ball.length; i++) {
                    this.initWallBall(ball[i]); 
                }
            }
        },
        data() {
            return {
            }
        },
        methods: {
            initWallBall: function(element) {
                // The SliderItem Class
                class WallBall {
                    constructor(opts) {
                        this.DOM = {
                            target: opts.target,
                        };
                    }
                }

                new WallBall({target: element });
            }
        }
    }
</script>

<style lang="scss" scope>
    body {
        background-color: #FFe8b4; 
    }

    section {
        // Size of the drawing area
        width: 500px;
        height: 500px;

        // Fixed center center
        position: fixed;
        top: 50%;
        left: 50%;
         // Shift itself over by 50% of its width and height
        transform: translate(-50%, -50%);
    }

</style>
