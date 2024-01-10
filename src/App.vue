<script setup lang="ts" name="App">
import Person from "./components/Person.vue"
import { ref } from "vue"
import { type Persons } from "@/types"
let persons = ref<Persons>([
    { id: 'e98219e12', name: '张三', age: 18 ,x:12},
    { id: 'e98219e13', name: '李四', age: 19 },
    { id: 'e98219e14', name: '王五', age: 20 },
])

</script>

<template>
    <Person :list="persons"/>
</template>

<style lang="scss" scoped></style>
