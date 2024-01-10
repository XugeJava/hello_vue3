<script setup lang="ts">
//toRef 将一个相应式对象中的每一个属性转为相应式对象
import {ref,toRefs,toRef} from "vue"
const person=ref({name:'xuge',age:20})
// const name=toRef(person.value,"name")
// const age=toRef(person.value,"age")
//批量将person中的属性转为响应式对象
const {name,age}=toRefs(person.value)
const changeName=()=>{
    name.value="xuge2"
}
const changeAge=()=>{
    age.value=21
}
</script>
<template>
    <div class="">
        <span>{{ person.name }}</span>
        <span>{{ person.age }}</span>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <p>{{ name }}</p>
        <p>{{ age }}</p>
    </div>
</template>
<style lang="scss" scoped>
</style>
