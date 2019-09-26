<template>
<div id="app">

    <!-- Wrap a utillities component -->
    <!-- Retrieve json file -->
    <Http url="/instruments.json">

        <!-- Passed an arrays of object from data HTTP -->
        <base-list  slot-scope="{data}" :items="data.guitars">
            <!-- Apply scope slot inside item(li) with object decorative -->
            <!-- Scoped slots make it possible to pass data from a child component to its parent, 
            thus allowing complete customization of the content. -->
            <a :href="`/guitars/${guitar.id}`" slot-scope="{item: guitar, index}">
                {{guitar.name}}
            </a>
        </base-list>

    </Http>
</div>
</template>

<script>
import BaseList from '~/components/vuejs/envato/BaseList'
import Http from '~/components/vuejs/envato/Http'

export default {
    components: { BaseList, Http },
    name: 'app',
    // data() {
    //     return {
    //         guitars: [
    //             { id: 0, name: 'Les Paul' },
    //             { id: 1, name: 'Vela' },
    //             { id: 2, name: 'Starla' }
    //         ]
    //     };
    // }
}
</script>

<style>
#app {
    padding: 10px;
    margin: 10px;
}
</style>
