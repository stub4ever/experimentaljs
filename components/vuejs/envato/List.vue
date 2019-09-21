<template>
<div class="margin-md">
    <h2>{{ itemType }}</h2>
    <ul>
        <!-- Vue can determine the unique item from each interations 
            apply v-bind to add unique value for each item by using js destructure otherwise we can't have same strings in an array or component that render in same layout -->
        <li v-for="(item, index) in listItems" :key="index">
            <!-- inside the brackets we can apply variables + expression -->
            {{ item }}
        </li>
    </ul>
    <!-- Add statement if items is exsists displayed count else displayed list is empty -->
    <p v-if="listItems.length > 0">There are {{ listItems.length }} {{ itemType.toLowerCase() }} </p>
    <p v-else> List is empty </p>
</div>
</template>

<script>
export default {
    // Pass data from outside to a component through props   
    props: {
        itemType: {
            type: String,
            default: '',
        },
        listItems: {
            type: Array,
            default: () => []
        },
    },
}
</script>

<style lang="scss" scoped>

</style>
