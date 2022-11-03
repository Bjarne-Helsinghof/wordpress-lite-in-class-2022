<template>
  <div v-if="isLoggedin">
    <h1>
      Edit your post <br> Hello {{ user.email }}
    </h1>

    <!-- <v-card class="bg-teal-lighten-5 pa-5 text-grey-darken-4">
      <h3 class="text-grey-darken-2 py-1">New post:</h3>

      <QuillEditor toolbar="full" theme="snow" v-model:content="AddItemData.description" placeholder="Enter content"
        contentType="html" ref="myEditor" />
      <v-btn class="bg-green-lighten-3" @click="firebaseAddSingleItem()">Add Dynamic Item</v-btn>
    </v-card> -->

    <v-card class="bg-amber-lighten-4 text-grey-darken-4 ma-5 pa-4" v-for="post in posts" :key="post">
      <h5>Post: {{ post.id }}</h5>

      <QuillEditor toolbar="full" theme="snow" v-model:content="post.description" contentType="html" />

      <v-btn class="bg-red-lighten-3" @click="firebaseDeleteSingleItem(post.id)">Delete item</v-btn>
      <v-btn class="bg-blue-lighten-3" @click="firebaseUpdateSingleItem(post.id)">update item</v-btn>
    </v-card>
  </div>
  <div v-else>Not logged in</div>
</template>

<script setup>
//import { db } from '../firebase.js'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import usePosts from '../modules/usePosts'
// added AND changed stuff in here
import { onMounted } from 'vue'
import useUsers from '@/modules/useUsers'
const { isLoggedin, isLoggedInTest, user } = useUsers()
onMounted(() => {
  isLoggedInTest()
})
// ends here
const {
  posts,
  //myEditor,
  //AddItemData,
  getPostsData,
  firebaseDeleteSingleItem,
  //firebaseAddSingleItem,
  firebaseUpdateSingleItem
} = usePosts()
onMounted(() => {
  getPostsData()
})
//const user = localStorage.getItem('userLoginInfoFireBase')
<<<<<<< Updated upstream
</script>
=======
</script>

<style lang="scss">
.editwelcome {
  color: white;
  text-shadow: 5px 5px 10px #000000;
  text-align: center;
  -webkit-text-stroke: 1px #282828;
  background: rgb(214, 146, 146);
  background: linear-gradient(90deg, rgba(214, 146, 146, 1) 22%, rgba(232, 229, 167, 1) 76%);
}
</style>
>>>>>>> Stashed changes
