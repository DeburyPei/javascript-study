/*
    区别
    
    call 
        用于调用函数fn 第一个参数是this 后面的所有参数是arguments
    apply
        跟call一样 唯一区别是只接受两个参数 第二个参数是数组
    bind
        并不调用函数fn 而是给fn绑定参数 并返回新的函数
*/

const f = (p1,p2,p3) => {
    console.log(this)
    console.log(p1,p2,p3);
    
}

// f.call(asThis,1,2,3) === f.apply(asThis,[1,2,3])
const args = json.args
f.call(asThis,args[0],args[1],args[2]) // call 不会知道args长度确定 需要一遍一遍打 但是es6有方法
f.call(asThis,...args)  // ... 展开数组
// ===
f.apply(asThis,args)

//f2提前绑定函数f的部分参数
const f2 = f.bind({name:'hello'},1,2) // this = x p1 = 1 p2 =3
f2(3)



//构造bind 
Function.prototype.bind2 = function(asThis,...args){
    console.log(this)
    
    const f1 = this // f 调用就是this
    return function f2(...args2){
        // 这里的this看外面调用形式
        f1.call(asThis,...args,...args2)
    }
}
// const f2 = f.bind2({name:'hello'},1,2)
// f2(3)

const f3 = f.bind2({name:'hello'},1,2).bind2(null,3)
f3()  // 1 2 3