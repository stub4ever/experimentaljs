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
                    { linkName: '1. The list of items', linkPath: '/vuejs/1-the-list-of-items' },
                    { linkName: '2. Building the Form', linkPath: '/vuejs/2-building-the-form' },
                    { linkName: '3. Implementing V-model', linkPath: '/vuejs/3-implementing-vmodel' },
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
