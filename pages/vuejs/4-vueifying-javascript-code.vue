<template>
<div>

    <!-- Add a button to trigger modal -->
    <!-- add click event listener if click showModal is true -->
    <button 
        @click.prevent="showModal" 
        class="btn btn--primary" 
        aria-controls="modal1"
    >Show modal</button>

    <!-- Modal show -->
    <!-- Modal hide => emit event hide when is trigger -->
    <base-modal 
        :show="isModalVisible" 
        @close="closeModal"
    >   
    </base-modal>
</div>
</template>

<script>
import BaseModal from '~/components/vuejs/envato/BaseModal'

export default {
    components: {
        BaseModal,
    },
    data() {
        return {
            isModalVisible: false,
        }
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
