<script setup lang="ts">
import useHooks from "./hooks"
const {sum,getList,list}=useHooks();
</script>

<template>
    <div class="test">
        <span>{{ sum }}</span>
        <button @click="sum++">点我sum+1</button>
        <button @click="getList">点我再来一只</button>
        <ul>
            <li v-for="item in list" :key="item"><img :src="item"/></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.test{
    background-color: skyblue;
}
img{
    height:100px
}
</style>
./hooks/hooks