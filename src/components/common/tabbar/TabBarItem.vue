<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--<img src="../../assets/img/tabbar/home.svg" alt=""/>-->
    <!--<div>首页</div>-->
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div  v-else><slot name="item-icon-active"></slot></div>
    <!--<div :class="{active:isActive}"> <slot name="item-text"></slot></div>-->
    <div :style="activeStyle"> <slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor:{
        type: String,
        default: 'red'
      }
    },
    data(){
      return{
        //isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !==-1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;  /*一般开发是49px*/
    font-size:14px;
  }
  .tab-bar-item>div>img{
    height:24px;
    width:24px;
    margin-top:3px;
    margin-bottom:2px;
    vertical-align: middle; /*去掉图片默认空白像素*/
  }
  /*.active{
    color:#fe6869;
  }*/
</style>
