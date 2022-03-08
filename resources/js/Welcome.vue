<template>
    <div>
        <div>
            <router-link :to="{name:'home'}">home</router-link>
            <router-link :to="{name:'login'}">login</router-link>
        </div>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Welcome"
    }
</script>

<style scoped>

</style>
