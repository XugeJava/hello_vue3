<script setup lang="ts">
import {ref,watch,reactive} from "vue"
const person=reactive({
    name:'张三',
    age:18,
    sex:'男',
    car:{
        brand:'奔驰',
        color:'白色',
    }
})
const changeName=()=>{
    person.name+='_'
}
const changeAge=()=>{
    person.age+=2
}
const changeGender=()=>{
    person.sex='女'
}
const changeBrand=()=>{
    person.car.brand='宝马'
}
const changeColor=()=>{
    person.car.color='黑色'
}
const changeCar=()=>{
    person.car={
        brand:'辉腾',
        color:'黑色',
    }
}
watch([()=>person.name, () => person.car],(val)=>{
    console.log('person change',val)
},{deep:true})
</script>
<template>
    <div>
        <div class="test">
            <p>姓名：{{person.name}}</p>
            <p>年龄：{{person.age}}</p>
            <p>性别：{{person.sex}}</p>
            <p>汽车品牌：{{person.car.brand}} 汽车颜色:{{person.car.color}}</p>
            <button @click="changeName">修改姓名</button>
            <button @click="changeAge">修改年龄</button>
            <button @click="changeGender">修改性别</button>
            <button @click="changeBrand">修改汽车品牌</button>
            <button @click="changeColor">修改汽车颜色</button>
            <button @click="changeCar">修改汽车</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.test{
    background-color: skyblue;
}
</style>
