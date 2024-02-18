<script setup lang="ts">
 const images = [
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ];
</script>

<template>

<van-search  placeholder="请输入搜索关键词" />

<van-swipe :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in images" :key="image">
      <img  :src="image" />
  </van-swipe-item>
</van-swipe>

</template>

<style scoped>
  img {
    width: 100%;
  }
</style>