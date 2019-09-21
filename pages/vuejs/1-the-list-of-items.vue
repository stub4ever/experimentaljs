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
            :list-items="instruments" 
        />
    </div>
</template>

<script>
    import axios from 'axios'
    import List from '~/components/vuejs/envato/List'

    export default {
        // Registering component property
        components: { List },
        
        // A factory function to return our data object inside the component
        data() {
            return {
                instruments: []
            }
        },

        // When component reaches a certain parts of lifecycle, its going to execute a method 
        // It will auto update the DOM with any change to the data

        // Created() executes whenever the component is just created. Its not on the DOM or Data, its just created
        created () {
            // For HTTP request we apply inside created method, because when nothings is in the DOM yet, 
            // by the time it is in the DOM, we have data back from the server, we might don't have any flickering or anything like that, if yes we can issued the request

            axios.get('/instruments.json').then(res => {
                // when we get data response set value to our data object instruments
                this.instruments = res.data.items
            })
        },
        // Mounted executes whenever the component is mounted in the DOM. By the time the mounthed method is executes, it exists in the DOM
        mounted() {

        }


    }
</script>

<style lang="scss" scoped>

</style>