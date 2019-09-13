<template>
    <div>
        
        <!-- Add component List -->
        <!-- Pass data attribute by defined a prop ListItems apply kebab case to match with the prop -->
        <!-- when passed only a string, number, boolean no need to apply v-bind -->
        <List 
            item-type='Fruit' 
            :list-items="['apple','oranges']" 
        />
        
        <List 
            item-type='Instrument' 
            :list-items="['guitar','piano']" 
        />
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