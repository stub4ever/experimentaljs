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
    import Two from 'two.js'    
    
    export default {
        components: {
            
        },
        mounted() {
            // Init object slider
            const square = document.querySelectorAll('[data-ref="square"]');
            if( square.length > 0) {
                for( var i = 0; i < square.length; i++) {
                    this.initSpinningSquare(square[i]); 
                }
            }
        },
        data() {
            return {
            }
        },
        methods: {
            initSpinningSquare: function(element) {
                // The SliderItem Class
                class SpinningSquare {
                    constructor(opts) {
                        this.DOM = {
                            ref: opts.ref,
                        };
                    }
                }

                new SpinningSquare({ref: element });
            }
        }
    }
</script>

<style lang="scss" scoped>
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
