<script setup>
import Sidebar from "./components/Sidebar.vue";
import Sidebar2 from "./components/Sidebar2.vue";
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <div class="row p-0 m-0">
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="sidebar-container">
        <Sidebar />
      </div>
    </div>
    <div class="col-lg-9 col-md-8 col-sm-6">
      <router-view />
    </div>
  </div> -->
  <div id="body">
    <div id="sidebar">
      <!-- <Sidebar /> -->
      <Sidebar2/>
    </div>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
#body {
  margin: 0;
  font-family: "Arial", sans-serif;
  display: flex;
  padding: 0;

}

#sidebar {
  width: 290px;
  color: white;
  padding: 0;
  margin: 0;
}

#main {
  flex: 1;
  /* padding: 20px; */
}
</style>
