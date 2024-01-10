<script setup lang="ts">
import {ref } from "vue"
import { type Persons } from "@/types";
const props=withDefaults(defineProps<{
    list?: Persons
}>(),{
    list:()=>[{id:'sadadfafd',name:'小猪',age:20}]
})
</script>

<template>
    <div class="test">
        <ul>
            <li v-for="item in props.list" :key="item.id">{{ item.name }} {{ item.age }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.test{
    background-color: skyblue;
}
</style>
