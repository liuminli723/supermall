<template>
  <tab-bar>
    <!--<tab-bar-item  path="/home"  activeColor="blue">-->
      <tab-bar-item  path="/home">
      <template #item-icon><img  src="~assets/img/tabbar/home.svg" alt=""></template>
      <template #item-icon-active><img  src="~assets/img/tabbar/home_active.svg" alt=""></template>
      <template #item-text><div>首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/group">
      <template #item-icon> <img src="~assets/img/tabbar/group.svg" alt=""></template>
        <template #item-icon-active><img src="~assets/img/tabbar/group_active.svg" alt=""></template>
          <template #item-text><div>分类</div></template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template #item-icon><img src="~assets/img/tabbar/cart.svg" alt=""></template>
      <template #item-icon-active><img  src="~assets/img/tabbar/cart_active.svg" alt=""></template>
      <template #item-text><div>购物车</div></template>
    </tab-bar-item>
    <tab-bar-item path="/person">
      <template #item-icon><img src="~assets/img/tabbar/person.svg" alt=""></template>
      <template #item-icon-active><img src="~assets/img/tabbar/person_active.svg" alt=""></template>
      <template #item-text><div>我的</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar  from "../../common/tabbar/TabBar.vue"
  import TabBarItem  from "../../common/tabbar/TabBarItem.vue"
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
img{
  width:32px;
  height:32px;
}
</style>
