<template>
    <div v-if="isLoggedin">
        <!--only show if user is logged in-->


        <h1 class="welcomeback">Welcome back {{ userNameOnly }}</h1>
        <h1 class="welcomeback">{{ user.email }}</h1>

    </div>
    <div v-else class="notloggedin">
        please log in to see this section
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
.welcomeback {
    color: white;
    text-align: center;
    background: rgb(214, 146, 146);
    background: linear-gradient(90deg, rgba(214, 146, 146, 1) 22%, rgba(232, 229, 167, 1) 76%);
}

.notloggedin {
    color: white;
    text-align: center;
    background: rgb(214, 146, 146);
    font-size: 2em;
    background: linear-gradient(90deg, rgba(214, 146, 146, 1) 22%, rgba(232, 229, 167, 1) 76%);
}
</style>