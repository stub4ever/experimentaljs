<template>
    <main class="page load-intro">
        <ol>
            <li class="margin-bottom-xxs" v-for="item in items" v-bind:key="item">
                <nuxt-link :to="item.linkPath">{{ item.linkName }}</nuxt-link>
            </li>
        </ol>
    </main>
</template>

<script>    
    import { clone } from '@babel/types';
    
    
    export default {
        components: {},
        data() {
            return {
                items: [
                    { linkName: '1. Basic PixiJs Setup', linkPath: '/pixi/1-basic-setup' },
                    { linkName: '2. Filters - Animated GodRay Image', linkPath: '/pixi/2-filters' },
                    { linkName: '3. Masking - Colored Spotlight Mask', linkPath: '/pixi/3-masking' },
                    { linkName: '4. Custom Cursor', linkPath: '/pixi/4-custom-cursor' },
                    { linkName: '5. Text Style', linkPath: '/pixi/5-text-style' },
                    { linkName: '6. Containers Displacement', linkPath: '/pixi/6-containers-displacement' },
                    { linkName: '7. Using Video', linkPath: '/pixi/7-using-video' },
                    { linkName: '8. Parallax Movement', linkPath: '/pixi/8-parallax-movement' },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    main {
        padding: 50px;
    }
</style>
