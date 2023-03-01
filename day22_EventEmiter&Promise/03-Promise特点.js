/*
    Promise的三态
        待定 解决 拒绝
        pending fulfilled rejected

    只有三种情况 
        待定 => 解决
        待定 => 拒绝
        待定 => 待定
    没有其他可能性

    对于 then().then()链式调用
    以摇色子().then(s1,f1).then(s2,f2)为例子
        如果摇色子成功 则必然调用s1 失败则必然调用f1
        如果s1被调用 那么s2 和 f2 都有可能被调用
            如果s1是return data 或者 return Promise.resolve(data) 那么调用s2(data)
            如果s1是return Promise.reject(reason) 或者 throw reason 那么调用f2(reason)
        如果f1被调用 那么s2和f2都有可能被调用
            如果f1是return data 或者 return Promise.resolve(data),那么调用s2(data)
            如果f1是return Promise.reject(reason) 或者 throw reason 那么调用f2(reason)

    .then 
        每次调用.then 都会创建一个新的Promise


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
摇骰子().then(
    (n)=>{return n>3?"大":"小"},  // 要有返回值 不然返回值就当作 undefined
    (n)=>{console.log("失败的原因:"+n);}
).then(
    (data)=>{console.log(data);},
    (reason)=>{console.log("失败的原因:"+reason);}
)