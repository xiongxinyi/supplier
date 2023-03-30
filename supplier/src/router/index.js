import { createRouter, createWebHashHistory } from "vue-router"
import LayOut from "../views/LayOut/LayOut.vue"
import store from "../store/index.js"
//路由配置
const routes = [
  {
    path: "/login",
    name: "login",
    component:()=>import("../views/pages/login.vue")
  },
  { 
    path: "/",
    name: "layout",
    component: LayOut,
    redirect:"/user",
    // 子路由/嵌套路由
    children:[
      {
        path:"/roles",
        name:"roles",
        component:()=>import("../views/pages/rolesList.vue")
      },
      {
        path:"/user",
        name:"user",
        component:()=>import("../views/pages/usersList.vue")
      },
    ]
  }
]
//生成hash路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  /**
   * 路由守卫
   * to：到哪个页面
   * form：到哪个页面
   * next：只有执行到next页面才会进行跳转
   */
  //判断用户是否登录
  console.log("store",store.state.uInfo)
  const uInfo = store.state.uInfo.userInfo
  if(!uInfo.username){
  //未登录，跳转到login页面，用js的跳转
    if(to.path==="/login"){
      next()
      return
    }
    next("/login")
  }else{
    next()
  }
}) 
//暴露路由对象
export default router