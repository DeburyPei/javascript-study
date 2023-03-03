// import user from './user.js'
// 导入变量
// import {a} from './user.js'
// console.log(a)

import './a.js'


//按需加载
button.onclick = ()=>{
    import ('./b.js').then(b => {

    },err =>{
        console.log(err)
        
    })
}


//不支持拼接字符串
// const path = "./" + "a.js"
// import path  // 错误