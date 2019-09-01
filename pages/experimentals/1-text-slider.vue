<template>
    <main>
        <section>
            
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
            const textSliders = document.querySelectorAll('[data-target="text-slider"]');
            if( textSliders.length > 0) {
                for( var i = 0; i < textSliders.length; i++) {
                    this.initTextSlider(textSliders[i]); 
                }
            }
        },
        data() {
            return {
            }
        },
        methods: {
            initTextSlider: function(element) {
                class TextSlider {
                    constructor(opts) {
                        this.DOM = {
                            target: opts.target,
                        };
                        // UNDERSTANDING THE CONCEPT AND CLONE
                        // https://stackoverflow.com/questions/15876754/infinity-loop-slider-concepts/15877302

                        // https://codepen.io/taboo09/pen/YXKzaP

                        // Use translate 3D for smooth scrolling
                        // https://css-tricks.com/infinite-all-css-scrolling-slideshow/


                        // Create a function what I need from this list



                        // A list of title_item 
                        // this.titles = ['<p>Every new beginning comes from some other beginning s end.</p>','<p>Even the genius asks questions.</p>','<p>It s better to burn out, than to fade away.</p>'];
                        // this.current = 0;
                    }
                    
                    changeTitle() {

                    }
                }
                

                new TextSlider({target: element }); 
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>



<script>
    // Get width text wrapper
    // Get width of each item

    // CREATING A INFINITE TEXT LOOP SLIDER
    // A function that set Start position for text and when play it moves to end direction

    // A function that track horizontal movement of each element

    // A function item when each item passed the text wrapper say "GO next"
    // and this will return back to the start position

    // A function that clone whole text-wrapper when text wrapper say go this will follow ?? do we need ?
</script>