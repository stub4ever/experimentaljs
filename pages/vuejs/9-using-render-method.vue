<template>
<div id="app">
    <base-login-form></base-login-form>
</div>
</template>

<script>
import BaseList from '~/components/vuejs/envato/BaseList'
import BaseLoginForm from '~/components/vuejs/envato/BaseLoginForm'

export default {
    components: { BaseList, BaseLoginForm },
    name: 'app',
    data() {}
}
</script>

<style>
#app {
    padding: 10px;
    margin: 10px;
}
</style>
