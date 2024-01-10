<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">年龄+1</button>
        <button @click="showTel">点我查看联系方式</button>
    </div>
</template>
<script lang="ts" setup name="Person13243">
import {ref} from 'vue'
// 数据，原来写在data中（注意：此时的name、age、tel数据都不是响应式数据）
let name = ref('张三')
let age = ref('18')
let tel = '13888888888'
console.log(1,name)
console.log(2,age)
console.log(3,tel)
// 方法，原来写在methods中
function changeName() {
    name.value = 'zhang-san' //注意：此时这么修改name页面是不变化的
    console.log(name)
}
function changeAge() {
    age.value += 1 //注意：此时这么修改age页面是不变化的
    console.log(age)
}
function showTel() {
    alert(tel)
}
</script>