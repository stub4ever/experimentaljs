<template>
    <!-- Extend component for modal -->

    <!-- <base-modal @close="$emit('close')"> Can remove this listeners --> 
    <!-- Every listeners and props will automatically bind from their parent -->
    <base-modal 
        v-on="$listeners"
        v-bind="$attrs"
    >   
        <template slot="header">
            <slot name="header"></slot>
        </template>

        <slot></slot>

        <template slot="footer">
            <div class="flex justify-end flex-gap-xs">
                <button 
                    @click.prevent="$emit('close')"
                    class="reset modal__close-btn" 
                >
                    <!-- Default text is cancel -->
                    <slot name="cancel-button-text">Cancel</slot>
                </button>

                <!-- Apply class dynamic props if true otherwise use "btn-primary" -->
                <button 
                    :class="confirmButtonClass || 'btn-primary'"
                    @click.prevent="$emit('close'), $emit('confirm')"
                    class="reset padding-xs" 
                >
                    <!-- Default text is ok -->
                    <slot name="confirm-button-text">OK</slot>
                </button>
            </div>
        </template>
    </base-modal>
</template>

<script>
import BaseModal from '~/components/vuejs/envato/BaseModal'

export default {
    props: ['confirmButtonClass'],
    components: { BaseModal },
}
</script>