/*
    Promise的其他API
        除了Promise.prototype.then 还有
            .catch(fn) 等价于 .then(undefined,fn)
            .finally(fn) 等价于 .then(fn,fn)

        Promise 自身属性
            Promise.all() 等待多个异步任务全部成功 一败则败
            Promise.allSettled()    等待多个异步任务全部成功  不会失败
            Promise.any()   等待第一个成功 全败则败 
            Promise.race()  等待第一个成功或失败
            Promise.resolve()   返回一个成功    一般用于测试
            Promise.reject()    返回一个试败    一般用于测试

*/

function 摇骰子(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const n = Math.floor(Math.random()*6)+1
            resolve(n)
            // reject("骰子碎了")
        },2000)
    })
}

ajax().then(undefined,(reason)=>{
    console.log('error')
    
})

//  ===  相当于就 直接执行车错误 reject 函数    .catch()
ajax().catch((reason)=>{
    console.log('error')
    
})

//最终都会执行 .finally
ajax().then(fn,fn)
ajax().finally(fn)   // fn 不接受参数 不接受成功还是失败、
ajax().finally((x)=>{
    // 这里的x 是undefined 不接受成功还是失败
}) 


ajax().then(s1,f1).catch(error).finally(ff)
ajax().then(s1,f1).then(null,error).then(ff,ff)



// Promise.all()
const p = Promise.all([ajax('/user'),ajax('/group'),ajax('/friends')])

p.then(
    (array) => {
    console.log('三个请求都拿到了数据',array[0],array[1],array[2])
},(reason) => {
    console.log('有一个请求失败了',reason)
    
}
)
//手写 面试前看看 Promise.all
Promise.all = (promises) =>{
    const result = []
    const count = promises.length
    return new Promise((resolve,reject) =>{
        promises.forEach((p,index)=>{
            p.then((data) => {
                result[index] = data
                count -= 1
                if(count === 0){
                    resolve(result)
                }
            },(reason)=>{
                reject(reason)
            })
        })
    })

}



// Promise.resolve() Promise.reject()
cosnst p = Promise.resolve(6)
p  
    .then(
        ()=>{ return new Error()},
        f1
    ).then(
        s2,  // 执行s2  return new Error() 返回普通对象  =》》》 throw  new Error() 执行f2 就是失败 reject
        f2
    )