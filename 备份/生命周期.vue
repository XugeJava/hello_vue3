<script setup lang="ts">
import {ref ,onUnmounted,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount} from "vue"
import { type Persons } from "@/types";
const props=withDefaults(defineProps<{
    list?: Persons
}>(),{
    list:()=>[{id:'sadadfafd',name:'小猪',age:20}]
})
const sum=ref(0)
onBeforeUnmount(()=>{
    console.log('卸载前')
})
onUnmounted(()=>{
    console.log('卸载后')
})
onBeforeMount(()=>{
    console.log('挂载前')
})
onMounted(()=>{
    console.log('挂载后')
})
onBeforeUpdate(()=>{
    console.log('更新前')
})
onUpdated(()=>{
    console.log('更新后')
})
</script>

<template>
    <div class="test">
        <ul>
            <li v-for="item in props.list" :key="item.id">{{ item.name }} {{ item.age }}</li>
        </ul>
        <span>{{ sum }}</span>
        <button @click="sum++">点我sum+1</button>
    </div>
</template>

<style lang="scss" scoped>
.test{
    background-color: skyblue;
}
</style>
