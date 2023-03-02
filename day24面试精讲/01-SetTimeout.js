// 6 6 6 6 6 6

for (var i = 0; i < 6; i++) {

    setTimeout(function () {  // 代码推迟  
        console.log(i)

    })
} // 当 i = 6的时候才执行 setTimeout里面的内容
/* 
var i    // var 每次使用都是同一个变量
for( i=0;i<6;i++){  

    setTimeout(function(){  // 代码推迟  
        console.log(i)
        
    })
} 
console.log(i)   // 6
*/
/*
 1 for + let 迭代绑定
 2 let j = 0 console.log(j)
 3. 立即执行函数 i=>参数i

*/
// 0 1 2 3 4 5
// for + let 迭代绑定
for (let i = 0; i < 6; i++) {  // let 每次声明都是新的变量

    setTimeout(function () {  // 代码推迟  
        console.log(i)

    })
}
/* 等同于
for(let _i=0;_i<6;_i++){  
    let i = _i
    setTimeout(function(){  
        console.log(i)   // 绑定新的i
        
    })
}
*/


//立即执行函数  !function(){}()
let i = 1
!function (j) {
    console.log(j)

}(i)  // 调用 function 并传入参数 i


// 0 1 2 3 4 5
for (var i = 0; i < 6; i++) {
    !function (j) {   // 传参 i =》j 立即执行 
        setTimeout(function () {  // 代码推迟  
            console.log(j)

        })
    }(i)

}