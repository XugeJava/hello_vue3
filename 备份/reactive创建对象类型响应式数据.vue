<script setup lang="ts">
import {reactive,ref} from "vue"
let car= reactive({brand:'奔驰',price:100})
const update=()=>{
    car.price+=200
}
let games = reactive([
    { id: 'ahsgdyfa01', name: '英雄联盟' },
    { id: 'ahsgdyfa02', name: '王者荣耀' },
    { id: 'ahsgdyfa03', name: '原神' }
])

let obj= reactive({
    a: {
        b: {
            c: 666
        }
    }
})
const updateFirstGame=()=>{
    games[0].name='王者荣耀222'
}
const updateObj=()=>{
    obj.a.b.c='Hello world'
}
</script>
<template>
    <div class="">
        <h2>{{ car.brand }},值{{ car.price }}万</h2>
        <button @click="update">修改汽车价格</button>
    </div> 
    <hr/>
    <div class="">
        <h2>游戏列表</h2>
        <ul>
            <li v-for="item in games" :key="item.id">{{ item.name }}</li>
        </ul>
        <button @click="updateFirstGame">修改第一个游戏名字</button>
    </div>
    <div>
        <h2>对象</h2>
        <p>{{ obj.a.b.c }}</p>
        <button @click="updateObj">test</button>
    </div>
</template>

<style lang="scss" scoped>
</style>
