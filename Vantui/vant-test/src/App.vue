<script setup>
import {RouterView} from "vue-router"
import { ref } from 'vue';
const active = ref('home');

</script>

<template>
  
<RouterView></RouterView>

<van-tabbar route v-model="active" active-color="#ee0a24">
    <van-tabbar-item  to="/home" name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item  to="/categroy" name="categroy" icon="search">商品分类</van-tabbar-item>
    <van-tabbar-item  to="/shopcar" name="shopcar" icon="friends-o">购物车</van-tabbar-item>
    <van-tabbar-item  to="/mine" name="mine" icon="setting-o">我的</van-tabbar-item>
</van-tabbar>

</template>

<style scoped>
</style>
