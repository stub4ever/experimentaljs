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
        
        <button 
            class="btn btn--primary margin-top-sm"
        >Send message</button>
    </form>
</template>

<script>
    export default {
        name: 'ContactForm'
    }
</script>

<style lang="scss" scoped>
    
</style>