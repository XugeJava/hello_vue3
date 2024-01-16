<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
import {useLoveStore} from "@/store/Love/index"
import { storeToRefs } from "pinia";
const loveStore=useLoveStore();
// 变量
const { talkList } = storeToRefs(loveStore);
// 方法
const  getLoveTalk=()=> {
    loveStore.getAllTalk();
}
//订阅
loveStore.$subscribe((mutate,state)=>{
    console.log('talkStore 数据发生了变化')
    localStorage.setItem('talkList',JSON.stringify(state.talkList))
})
</script>

<style scoped>
.talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>