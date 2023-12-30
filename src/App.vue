<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="body">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  margin: 0;
  font-family: "Arial", sans-serif;
  display: flex;
  padding: 0;

  .sidebar {
    width: 290px;
    color: white;
    padding: 0;
    margin: 0;
  }

  .main {
    flex: 1;
  }
}
</style>
