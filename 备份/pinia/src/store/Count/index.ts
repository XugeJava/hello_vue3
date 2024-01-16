import {defineStore} from 'pinia'
export const useCountStore=defineStore("count",{
    //真正存储数据
    state(){
        return {
            sum:0,
            school:'',
            address:''
        }
    },
    actions:{
        increment(val:number){
            this.sum+=val   
        },
        decrement(val:number){
            if(this.sum>1){
                this.sum-=val
            }
        }
    }
});