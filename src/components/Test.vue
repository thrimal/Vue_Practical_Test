<template>
    <div class="outer">
      <div class="content">
        <h1>Hello</h1>
      </div>
       
    </div>
</template>
<script setup>

</script>
<style lang="scss">
.outer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgb(243, 251, 253);

  .content{
    width: 90%;
    height: 100%;
    margin-top: 50px;
  }
}
</style>