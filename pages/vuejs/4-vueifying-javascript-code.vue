<template>
    <div>

        <!-- Add a button to trigger modal -->
        <!-- add click event listener if click modalshown is true -->
        <button 
            @click.prevent="modalShown = true"
            class="btn btn--primary" 
            aria-controls="modal1"
        >Show modal</button>

        <!-- Modal show -->
        <!-- Modal hide => emit event hide when is trigger -->
        <modal 
            :show="modalShown"
            @hide="modalShown = false"
        ></modal>
    </div>
</template>

<script>
    import Modal from '~/components/vuejs/Modal'

    export default {
        components: {
            Modal,
        },
        data() {
            return {
                modalShown: false,
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>