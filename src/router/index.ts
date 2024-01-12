//创建一个路由器，并抛出
import {createRouter,createWebHashHistory} from "vue-router"
//创建router
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            name:'首页',
            path:"/",
            component:()=>import("@/views/Home/index.vue")
        },
        {
            name:'关于',
            path:'/about',
            component:()=>import("@/views/About/index.vue")
        },
        {
            name:'联系我们',
            path:"/news",
            component:()=>import("@/views/News/index.vue"),
            children:[
                {
                    name:'detail',
                    path:'detail/:id?/:title?/:content?',
                    component:import("@/views/News/components/detail.vue"),
                    //第一种:将路由收到的所有params参数传给props
                    // props:true
                    //第二种:可以自己决定收到的参数
                    // props(route){
                    //     return route.params
                    // }
                    //第三种 对象写法
                    // props:{
                    //     id:String,
                    //     title:String,
                    //     content:String
                    // }
                }
            ]
        }
    ]
});
//暴露router
export default router