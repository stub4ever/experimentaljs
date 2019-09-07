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
                    { linkName: '1. WallBall', linkPath: '/maths/1-wall-ball' },
                    { linkName: '2. Flower Brush', linkPath: '/maths/2-flower-brush' },
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
