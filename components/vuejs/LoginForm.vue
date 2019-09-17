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
        <form-field
            label="Email Address"
            type="email"
            v-model="email"
            has-col-class="col-10"
        ></form-field>
    </fieldset>

    <button class="btn btn--primary margin-top-sm">Send message</button>
</form>
</template>

<script>
import FormField from '~/components/vuejs/FormField'

export default {
    data() {
        return {
            email: 'toby@gmail.co'
        }
    },
    components: { FormField },
    methods: {
        submit() {

            // Create console to test submitting email
            console.log(`Email: ${this.email}`)
        }
    },
}
</script>

<style scoped>

</style>
