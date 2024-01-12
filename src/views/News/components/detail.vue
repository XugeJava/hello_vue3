<template>
  <ul class="news-list">
    <li>编号：{{props?.id}}</li>
    <li>标题：{{ props?.title}}</li>
    <li>内容：{{ props?.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
const props=defineProps<{
  id:string,
  title:string,
  content:string,
}>()
</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list>li {
  line-height: 30px;
}
</style>