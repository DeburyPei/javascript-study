function 摇骰子(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const n = Math.floor(Math.random()*6)+1
            resolve(n)    // 成功传n
            // reject("骰子碎了")   // 失败传 "骰子碎了"
        })
    })
}
摇骰子().then(
    (n)=>{console.log(n);},
    (n)=>{console.log("失败的原因:"+n);}
)