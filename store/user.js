//固定的写法，暴露出state
export const state = {
    username:"webshitian"
}

//存放的是同步修改state的方法
export const mutations = {
    //mutation下的值必须是一个函数，函数中会有一个固定的参数state。第二个参数是用户调用方法时候传进来的
    //非常类似于$emit
    setUsername(state,data){
        state.username = data;
    }
}




//存放的是异步修改state的方法
export const actions = {}