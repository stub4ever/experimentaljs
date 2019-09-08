<template>
    <main>
        <section ref="square"></section>
    </main>
</template>

<script>
    // Plugins
    import Util from '~/plugins/Util.js'
    import Two from 'two.js' 
    import Square from '@/modules/motions/2-Square.js'

    export default {
        components: {
            
        },
        data() {
            return {
                canvas: null,
            }
        },
        mounted() {
            this.initCanvas()
        },
        methods: {
            initCanvas: function() {
                
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
