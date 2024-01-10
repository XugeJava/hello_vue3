<script setup lang="ts">
import {ref,watch,reactive} from "vue"
const sum=ref(0)
//情况1:watch监视ref定义基本数据变化
watch(sum,(val,newVal)=>{
    console.log('sum变化了'+val,newVal)
})
const obj=ref({
    name:'张三',
    age:18
})
//情况2:watch监视ref定义对象类型数据变化
/* 
    监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    watch的第一个参数是：被监视的数据
    watch的第二个参数是：监视的回调
    watch的第三个参数是：配置对象（deep、immediate等等.....） 
*/
watch(obj, (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
},{deep:true})
const changeAge=()=>{
    obj.value.age++
}
const changeName=()=>{
    obj.value.name+='~'
}
const changePerson=()=>{
    obj.value={
        name:'李四',
        age:19
    }
}
let person = reactive({
    name: '张三',
    age: 18
})
let obj2 = reactive({
    a: {
        b: {
            c: 666
        }
    }
})
// 监视，情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
watch(person, (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
})
watch(obj2, (newValue, oldValue) => {
    console.log('Obj变化了', newValue, oldValue)
})
// 方法
function changeName1() {
    person.name += '~'
}
function changeAge1() {
    person.age += 1
}
function changePerson1() {
    Object.assign(person, { name: '李四', age: 80 })
}
function test() {
    obj2.a.b.c = 888
}
</script>
<template>
    <div>
        <div class="test">
            <h1>情况1:watch监视ref定义基本数据变化</h1>
            <button @click="sum++">+</button>
            <span>{{ sum }}</span>
        </div>
        <div class="test">
            <h1>情况2:watch监视ref定义对象类型数据变化</h1>
            <button @click="changeName">改变名</button>
            <button @click="changeAge">改变年龄</button><br/>
            <button @click="changePerson">改变人</button><br/>
            <span>{{ obj.name}} </span><br/>
            <span>{{ obj.age }}</span><br/>
        </div>
        <div class="test">
            <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
            <h2>姓名：{{ person.name }}</h2>
            <h2>年龄：{{ person.age }}</h2>
            <button @click="changeName1">修改名字</button>
            <button @click="changeAge1">修改年龄</button>
            <button @click="changePerson1">修改整个人</button>
            <hr>
            <h2>测试：{{ obj2.a.b.c }}</h2>
            <button @click="test">修改obj.a.b.c</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.test{
    background-color: skyblue;
}
</style>
