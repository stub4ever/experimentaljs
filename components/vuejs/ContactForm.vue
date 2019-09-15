<template>
    <form class="max-width-400 margin-x-auto">
        <legend class="form-legend">Contact Form</legend>
        
        <fieldset class="flex flex-gap-sm">
            <div class="col-12">
                <label for="sender-email" class="form-label margin-bottom-xs">Email</label>

                <!-- With v-model we bind data properties with the form control 
                    Its a two-way binding, when the property inside form controle or any data we specify change it will update auto -->
                <input 
                    type="email"
                    class="form-control width-100%"
                    v-model="email"
                >
            </div>
            
            <div class="col-12">
                <label for="sender-message" class="form-label margin-bottom-xs">message</label>
                <textarea 
                    id="sender-message" 
                    rows="10"
                    class="form-control width-100%"
                    v-model="message"
                ></textarea>
            </div>
        </fieldset> 
        
        <!-- Add event onclick vue specify directive v-on (shortcut @) + add modifier prevent on click (modifier is chainable) -->
        <!-- If email is invalid or message isn't created disable the button -->
        <button 
            class="btn btn--primary margin-top-sm"
            @click.prevent="submitForm"
            :disabled="!isEmailValid || !message"
        >Send message</button>
    </form>
</template>

<script>
    export default {
        name: 'ContactForm',
        
        // Defined Data factory that returns a object
        data() {
            return {
                email: '',
                message: ''
            }
        },

        // When applying complex logic that return data => use computed method instead html inline
        // Inside the computed everytime when a two-binding property change it will update automatically
        computed: {
            isEmailValid() {
                let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return reg.test(this.email) 
            }
        },
        methods: {
            submitForm(event) {
                // validate form

                // submit form
                console.log(`Thank you we will contact you soon. We will reply ${this.email} soon.`)
            }
        },
    }
</script>

<style lang="scss" scoped>
    
</style>