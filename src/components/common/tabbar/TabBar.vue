<template>
  <div id="tabbar">
  <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tabbar{
    display: flex;
    align-items: center;
    position: fixed;
    left:0;
    right:0;
    bottom: 0;
    background: #f6f6f6;
  }

</style>
