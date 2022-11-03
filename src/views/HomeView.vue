<template>
  <div>
    <h1 class="postarchive">
      post archive
    </h1>

    <v-card class="post ma-5 pa-4" v-for="post in posts" :key="post">

      <p v-html="post.description"></p>

    </v-card>
  </div>
  <v-btn color="green" a href="../about">looking to make a post?<span class="label label-danger"></span></v-btn>

</template>

<script setup>
//import { db } from '../firebase.js'
import { onMounted } from 'vue'
import usePosts from '../modules/usePosts'
//import {  /* getDocs, */ doc , deleteDoc } from "firebase/firestore";
// const posts = ref([]) 
const {
  posts,
  getPostsData,
} = usePosts()
onMounted(() => {
  getPostsData()
})
// const querySnapshot = await getDocs(collection(db, "posts"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//     posts.value.push({
//     ...doc.data(),
//     id: doc.id
//   })
//   //debugger
//   console.log(doc.id, " => ", doc.data());
// });
</script>

<style lang="scss">
.postarchive {
  color: white;
  text-shadow: 5px 5px 10px #000000;
  text-align: center;
  -webkit-text-stroke: 1px #282828;
}

.postarchive {
  background: rgb(214, 146, 146);
  background: linear-gradient(90deg, rgba(214, 146, 146, 1) 22%, rgba(232, 229, 167, 1) 76%);
  color: white;
  text-align: center;
}
</style>