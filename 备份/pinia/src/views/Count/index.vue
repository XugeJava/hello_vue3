<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from "vue";
import {useCountStore} from "@/store/Count/index"
import { storeToRefs } from "pinia";
// 数据
const countStore = useCountStore();
//只会关注数据，不会影响其他
const {sum,address,school}=storeToRefs(countStore)
console.log('!!!!!!!!!!!!!!!!', storeToRefs(countStore))
let n = ref(1) // 用户选择的数字
// 方法
function add() {
    countStore.increment(n.value)
}
function minus() {
    countStore.decrement(n.value)
}
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>