<template>
    <div>

        <!-- Add a button to trigger modal -->
        <!-- add click event listener if click showModal is true -->
        <button 
            @click.prevent="showModal = true"
            class="btn btn--primary" 
            aria-controls="modal1"
        >Show modal</button>

        <!-- Modal show -->
        <!-- Modal hide => emit event hide when is trigger -->
        <modal 
            :show="showModal"
            @hide="showModal = false"
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
                showModal: false
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>