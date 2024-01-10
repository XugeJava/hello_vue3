<script setup lang="ts">
import {ref,watchEffect} from "vue"
const temp=ref(10)
const height=ref(20)
const changeTemp=()=>{
    temp.value+=10
}
const changeHeight=()=>{
    height.value+=10
}
watchEffect(()=>{
    console.log(temp.value,height.value)
})
</script>

<template>
    <div class="test">
        <h1>水温:{{ temp }}</h1>
        <h1>水位:{{ height }}</h1>
        <button @click="changeTemp">修改水温</button>
        <button @click="changeHeight">修改水位</button>
    </div>
</template>

<style lang="scss" scoped>
.test{
    background-color: skyblue;
}
</style>
