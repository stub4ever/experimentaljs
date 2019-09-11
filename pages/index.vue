<template>
    <main class="page load-intro">
        <h2>Courses</h2>
        <ol>
            <li class="margin-bottom-xxs" v-for="item in items" v-bind:key="item">
                <nuxt-link :to="item.linkPath">{{ item.linkName }}</nuxt-link>
            </li>
        </ol>

        <h2>Components</h2>
        <ol>
            <li class="margin-bottom-xxs" v-for="item in components" v-bind:key="item">
                <nuxt-link :to="item.linkPath">{{ item.linkName }}</nuxt-link>
            </li>
        </ol>

        <h2>Experimentals</h2>
        <ol>
            <li class="margin-bottom-xxs" v-for="item in experimentals" v-bind:key="item">
                <nuxt-link :to="item.linkPath">{{ item.linkName }}</nuxt-link>
            </li>
        </ol>
    </main>
</template>

<script>      
    // Define each line what it does
    export default {
        components: {},
        data() {
            return {
                items: [
                    { linkName: '1. Creative Maths', linkPath: '/maths' },
                    { linkName: '2. Creative Motions', linkPath: '/motions' },
                    { linkName: '3. Up and Running Pixi.JS', linkPath: '/pixi' },
                ],
                components: [
                    { linkName: '1. slideshow', linkPath: '/slideshows' },
                ],
                experimentals: [
                    { linkName: '1. Random Experimental', linkPath: '/experimentals' },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>
