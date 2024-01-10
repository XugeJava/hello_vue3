<script setup lang="ts">
import {ref,toRefs,toRef,computed} from "vue"
const name1=ref('张')
const name2=ref('三')
const str=computed({
    get(){
        return name1.value+name2.value
    },
    set(val){
        name1.value=val.substring(0,1)
        name2.value=val.substring(1)
        console.log('set')
    }
    // return name1.value+name2.value
})
const changeStr=()=>{
    str.value='张三awd'
}
</script>
<template>
    <div class="">
        姓:<input type="text" v-model="name1"/>
        名:<input type="text" v-model="name2"/>
        <span>{{ str }}</span>
        <button @click="changeStr">修改姓名</button>
    </div>
</template>
<style lang="scss" scoped>
</style>
