<template>
    <!-- Extend component for modal -->

    <!-- Add emit close to hide modal -->
    <base-modal 
        :show="show"
        @close="$emit('close')"
    >   
        <!-- Inside template header add a placeholder header slot so that it can float to modal component -->
        <template slot="header">
            <slot name="header"></slot>
        </template>

        <!-- The content goes to default slot inside the Modal component body -->
        <slot></slot>

        <!-- Use template to prevent extra div wrapping as slot -->
        <template slot="footer">
            <div class="flex justify-end flex-gap-xs">
                <button 
                    @click.prevent="$emit('close')"
                    class="reset modal__close-btn" 
                >Cancel</button>

                <!-- Add emit confirm && close -->
                <button 
                    @click.prevent="$emit('close'), $emit('confirm')"
                    class="reset modal__close-btn" 
                >Ok</button>
            </div>
        </template>
    </base-modal>
</template>

<script>
import BaseModal from '~/components/vuejs/envato/BaseModal'

export default {
    props: ['show'],
    components: { BaseModal },
}
</script>