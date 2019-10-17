
import { Message } from 'element-ui'

//nuxt插件的固定写法
//context包含nuxt下所有的方法，固定有的参数
export default (context) => {
    //拦截错误的响应信息，跟以前项目中的main.js中的拦截器不一样
    //main.js中拦截器:拦截所有的请求响应
    //当前的拦截只拦截错误
    // console.log(context.$axios)
    context.$axios.onError(res => {
        //res是错误的对象,Error对象js原生的对象，可以通过response获取详细信息
        // console.log(res.response)
        const {message,statusCode} = res.response.data;
        
        if(statusCode === 400){
            // this.$message.error(message)
            Message.error(message);
        }
    })
}