<template>
    <div>
        <v-row>
            <v-col md="6" xs="12" offset-md="3">
                <h1 class="loginform">Login</h1>

                <div class="info">
                    <v-text-field v-model="email" label="Email" required>
                    </v-text-field>
                    <v-text-field v-model="password" label="Password" required>
                    </v-text-field>
                    <v-btn color="primary" @click.prevent="logIn()">
                        Login
                    </v-btn>
                    <v-btn color="error" @click.prevent="logOut()">
                        LogOut
                    </v-btn>
                    <v-btn @click.prevent="checkeMe()">
                        check
                    </v-btn>

                </div>
            </v-col>
        </v-row>
    </div>
</template>
  
<script setup>
import useUsers from '@/modules/useUsers'
const { logIn, logOut, email, password, user } = useUsers()
const checkeMe = () => {
    console.log("user variable", user, user.value)
}
</script>
  
<style lang="scss" scoped>
.loginform {
    color: white;
    text-shadow: 5px 5px 10px #000000;
    text-align: center;
    -webkit-text-stroke: 1px #282828;

    background: rgb(214, 146, 146);
    background: linear-gradient(90deg, rgba(214, 146, 146, 1) 22%, rgba(232, 229, 167, 1) 76%);
}
</style>