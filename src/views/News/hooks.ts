import {reactive} from "vue"
export default  function(){
    const newS = reactive([
        {
            id: 1,
            title: "很好的抗癌食物",
            content: "西兰花",
        },
        {
            id: 2,
            title: "很棒的足球功夫",
            content: "李铁小子",
        },
        {
            id: 1,
            title: "很牛的中国文化",
            content: "万方方",
        },
    ]);

    return{
        newS
    }
}