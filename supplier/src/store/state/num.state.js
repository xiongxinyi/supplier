export default{
    namespaced:true,
    // 全局的状态初始值
    state: {
        count:1,
    },
    // 计算state
    getters: {
      countStatus(state){
        return state.count<=1
      }
    },
    // 更改状态的方法，更新state的唯一方法，commit mutations
    mutations: {
      setCount(state,num){
        state.count = num
      }
    },
    // 可以异步操作，actions 可以返回promise，更改数据还是mutations
    actions: {
      setCountPromise(context,num){
        return new Promise((resolve,reject)=>{
          if(num>100){
            reject("值不能大于100")
          }else{
            context.commit("setCount",num)
            resolve()
          }
        })
      }
    },
}