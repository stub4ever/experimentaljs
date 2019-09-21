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
    <modal 
        :show="isModalVisible" 
        @close="closeModal"
    >   
        <!-- Use template to prevent extra div wrapping as slot -->
        <template slot="header">Header</template>

        <!-- The content goes to default slot inside Modal body -->
        Lets check if work out
        
        <!-- Use template to prevent extra div wrapping as slot -->
        <template slot="footer">
            <div class="flex justify-end flex-gap-xs">
                <button class="reset modal__close-btn" @click="closeModal">close</button>
            </div>
        </template>
    </modal>
</div>
</template>

<script>
import Modal from '~/components/vuejs/envato/Modal'

export default {
    components: {
        Modal,
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
