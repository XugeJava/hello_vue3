import { ref,onMounted } from "vue";
import axios from "axios";
const sum = ref(0);
const list = ref<string[]>([]);
export default  function(){
    onMounted(()=>{
        getList();
    })
    const getList = async () => {
        try {
        const res = await axios.get(
            "https://dog.ceo/api/breed/pembroke/images/random"
        );
        list.value.push(res.data.message);
        } catch (error: any) {
        console.log(error.message);
        }
    };

    return  {
        sum, list, getList
    };
}


