<template>
    <div v-if="isLoggedin">
        <!--only show if user is logged in-->

        <h1>Welcome back {{ userNameOnly }}</h1>
        <h1>{{ user.email }}</h1>
    </div>
    <div v-else>
        Not logged in
    </div>
</template>
  
<script setup>
import useUsers from '@/modules/useUsers'
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
const { isLoggedInTest, isLoggedin, user } = useUsers()
onMounted(() => {
    isLoggedInTest()
})
const userNameOnly = computed(() => {
    return user.value.email.split('@')[0]
})
</script>
  
<style lang="scss" scoped>

</style>