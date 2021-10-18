<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center><div>购物街</div></template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "home",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
.home-nav{
  background:var(--color-tint);
}
</style>
