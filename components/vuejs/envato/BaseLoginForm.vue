<template>
<!-- Implement Submit throught javascript -->
<form @submit.prevent="submit" class="max-width-500 margin-x-auto padding-md">
    <legend class="form-legend">Contact Form</legend>

    <fieldset class="flex flex-gap-sm">
        <!-- Create component FormForm for our Login form -->
        <!-- Two-way binding 
            From the parent perspective we bind a v-model to our child FormField === 
            FormField here is your value like value="email"
        -->
        <base-form-field
            label="Email Address"
            type="email"
            v-model="email"
            has-col-class="col-10"
        ></base-form-field>

        <base-form-field
            label="Message"
            type="textarea"
            v-model="message"
            has-col-class="col-10"
        ></base-form-field>
    </fieldset>

    <button class="btn btn--primary margin-top-sm">Send message</button>
</form>
</template>

<script>
import BaseFormField from '~/components/vuejs/envato/BaseFormField'

export default {
    components: { BaseFormField },
    data() {
        return {
            email: 'exampley@email.co',
            message: ''
        }
    },
    methods: {
        submit() {
            // Create console to test submitting email
            console.log(`Email: ${this.email}`)
            console.log(`Message: ${this.message}`)
        }
    },
}
</script>

<style scoped>

</style>
