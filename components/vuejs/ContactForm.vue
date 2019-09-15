<template>
    <form class="max-width-400 margin-x-auto">
        <legend class="form-legend">Contact Form</legend>
        
        <fieldset class="flex flex-gap-sm">
            <div class="col-12">
                <label for="sender-email" class="form-label margin-bottom-xs">Email</label>
                <input 
                    type="email"
                    class="form-control width-100%"
                >
            </div>
            
            <div class="col-12">
                <label for="sender-message" class="form-label margin-bottom-xs">message</label>
                <textarea 
                    id="sender-message" 
                    rows="10"
                    class="form-control width-100%"
                ></textarea>
            </div>
        </fieldset> 
        
        <!-- Add event onclick vue specify directive v-on (shortcut @) + add modifier prevent on click (modifier is chainable) -->
        <button 
            class="btn btn--primary margin-top-sm"
            @click.prevent="submitForm"
        >Send message</button>
    </form>
</template>

<script>
    export default {
        name: 'ContactForm',
        methods: {
            submitForm(event) {
                console.log(event.target)
            }
        },
    }
</script>

<style lang="scss" scoped>
    
</style>