<template>
    <ul>
        <li v-for="item in listItems" :key="item">
            <!-- inside the brackets we can apply variable + expression -->
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    // Pass data from outside to a component through props   
    props: {
        listItems: {
            type: Array,
            default: []
        },
    },
}
</script>

<style lang="scss" scoped>

</style>
