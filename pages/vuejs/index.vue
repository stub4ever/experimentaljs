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
                    { linkName: '4. Vue-ifying JavaScript Code', linkPath: '/vuejs/4-vueifying-javascript-code' },
                    { linkName: '5. Using Slots to Facilitate Custom', linkPath: '/vuejs/5-using-slots-to-facilitate-custom' },
                    { linkName: '6. Extending Components', linkPath: '/vuejs/6-extending-components' },
                    { linkName: '7. Improving Decorated Components', linkPath: '/vuejs/7-improving-decorated-components' },
                    { linkName: '8. Using scoped slots', linkPath: '/vuejs/8-using-scoped-slots' },
                    { linkName: '9. Using the render() method', linkPath: '/vuejs/9-using-render-method' },
                    { linkName: '10. Creating a data provider component', linkPath: '/vuejs/10-creating-a-data-provider-component' },
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
