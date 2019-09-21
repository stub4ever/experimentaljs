<template>
<div>

    <!-- Add a button to trigger modal -->
    <!-- add click event listener if click showModal is true -->
    <button 
        @click.prevent="showModal" 
        class="btn btn--primary" 
        aria-controls="modal1"
    >Show modal</button>
    
    <!-- Use event confirm to emit or v-model(when true or false do something) -->
    <confirm-modal 
        :show="isModalVisible" 
        @close="closeModal"
        @confirm="DeleteRecource"
    >   
        <!-- Use template to prevent extra div wrapping as slot -->
        <template slot="header">Delete Resource</template>

        <!-- The content goes to default slot inside Modal body -->
        <p>Are you sure you want to delete</p>
        
    </confirm-modal>
</div>
</template>

<script>
import ConfirmModal from '~/components/vuejs/envato/ConfirmModal'

export default {
    components: {
        ConfirmModal,
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
        },
        DeleteRecource() {
            alert('Resource is deleted')
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
