<template>
    <div>
        
        <!-- Add component List -->
        <!-- Pass data attribute by defined a prop ListItems apply kebab case to match with the prop -->
        <List :list-items="['apple','oranges']" />
    </div>
</template>

<script>
    import List from '~/components/vuejs/List'

    export default {
        // Registering component property
        components: { List }
    }
</script>

<style lang="scss" scoped>

</style>