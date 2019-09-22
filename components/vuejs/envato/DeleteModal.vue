<template>
    <!-- Keep everything attach to this component only configure the text & class attributes -->
    <!-- Every listeners and props will automatically bind from their parent -->
    <confirm-modal-refactor 
        v-on="$listeners"
        v-bind="$attrs"
        confirm-button-class="btn--primary"
    >   
        <template slot="header">
            <slot name="header"></slot>
        </template>

        <slot></slot>

        <!-- change the text of buttons via placeholder  -->
        
        <template slot="confirm-button-text">Delete</template>
        
    </confirm-modal-refactor>
</template>

<script>
import ConfirmModalRefactor from '~/components/vuejs/envato/ConfirmModalRefactor'

export default {
    components: { ConfirmModalRefactor },
}
</script>