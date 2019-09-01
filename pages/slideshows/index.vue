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
    export default {
        components: {},
        data() {
            return {
                items: [
                    { linkName: '1. 50 50 Slide', linkPath: '/slideshows/1-half-half-slide' },
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
