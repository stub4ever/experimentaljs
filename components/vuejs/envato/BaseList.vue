<template>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            <!-- Bind a props to each slot -->
            <!-- Getting data from the parent -->
            <slot :item="item" :index="index"></slot>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            default: []
        },
    },
}
</script>
