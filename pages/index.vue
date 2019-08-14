<template>
    <main class="page load-intro">
        <ol>
            <li v-for="item in items" v-bind:key="item">
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
                    { linkName: '1. Spinning Square', linkPath: '/spinning-square' },
                ]
            }
        },
    }
</script>

<style lang="scss" scope>
    main {
        padding: 50px;
    }

</style>
