<!--
<template>
    <div class="form-control">
        <label class="form-control width-100% margin-top-xs">{{ label }}</label>
        <input 
            class="form-control width-100%" 
            :type="type" 
            :value="value"
            @input="$emit('input', $event.target.value)"
        >
    </div>
</template>
-->

<script>
    // Use render => to avoid using <template></template>
    export default {
        props: ['label', 'type', 'value'], // pass in 3 properties

        // Using render methods to create an object called VNode => Vue use that to render components
        // The method must return a VNode
        render(createElement) {
            // CreatElement returns 3 agruments 
            // 1st agrument = tag name
            // 2nd agrument = an object that contains variety of information about that element
            // 3rd agrument = childeren of the element

            // return div + empty object + label & FormControl
            return createElement('div', {}, [
                createElement('label', this.label),
                this.buildFormControl(createElement)
            ]);
        },
        methods: {
            buildFormControl(createElement) {
                let options = {
                    // allow to apply dynamic class bind with data from the parent
                    class: {
                        'form-control width-100% margin-top-xs': true
                    },
                    on: {
                        input: (e)=> this.$emit('input', e.target.value)
                    }
                }

                if (this.type === 'textarea') {
                    return createElement('textarea', options, this.value);
                }

                options.attrs = {
                    value: this.value,
                    type: this.type
                };

                return createElement('input', options);
            }
        }
    }
</script>
