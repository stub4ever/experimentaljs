<template>
    <div :class="hasColClass">
        <label class="form-label margin-bottom-xs">{{ label }}</label>
        <!-- Bind the email to our loginForm with data "email" -->
        <!-- No need to bind v-model inside here -->
        <!-- From the child perspective when it receive the value it needs to update that value when it updates >
            how? with an events , In this case we have to add bind listen to "input"
        -->
        <!-- From vue perspective what is the event that the parent is listening for?
            From the target value of the event from this input element => $emit('input', $event.target.value)  
        -->    
        
        <!-- Specify the prop -->
        <!-- Emit the input event -->
        <!-- pass the updated value with that event -->
        <!-- Get inside child the default value data from the parent "LoginForm" => add :value=value  -->
        <input 
            class="form-control width-100%" 
            :type="type" 
            :value="value"
            @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
    export default {
        name: 'FormField',
        props: {
            // Specify the value we going to receive from the parent we receive v-model
            value: {
                type: String
            },
            label: {
                type: String,
                default: ''
            }, 
            type: {
                type: String,
                default: ''
            },
            hasColClass: {
                type: String,
                default: 'col-12'
            }
        }
    }
</script>

<style scoped>

</style>