<template>
  <div class="about">
    <h2 class="newpostintro">what do you have that you would like to remember?</h2> <br>
    <v-btn class="bg-green-lighten-3" @click="isOpen = true">Add New Post</v-btn>
    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <NewPostView @close="isOpen = false">

        </NewPostView>
      </div>
    </teleport>
  </div>
  <br>
  <v-btn color="blue" a href="../">looking to check what you have to remember?<span class="label label-danger"></span>
  </v-btn>
</template>

<script setup>
import { ref } from 'vue'
import NewPostView from './NewPostView.vue'
const isOpen = ref(false)
</script>

<style lang="scss">
/* 
.root {
  position: relative;
} */
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.modal>div {
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 64px;
  width: 95%;
}

#floatyClose {
  position: fixed;
  top: 96px;
  left: -5px;
  z-index: 99;
}


.newpostintro {
  color: white;
  text-shadow: 5px 5px 10px #000000;
  text-align: center;
  -webkit-text-stroke: 1px #282828;
  font-size: 1.5em;

  background: rgb(214, 146, 146);
  background: linear-gradient(90deg, rgba(214, 146, 146, 1) 22%, rgba(232, 229, 167, 1) 76%);
}
</style>