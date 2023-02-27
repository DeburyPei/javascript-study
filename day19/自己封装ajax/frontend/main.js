ajax({
    method:'get',
    path:'/data',
    successFn:(xhr)=>{
        console.log('success')
        
    },
    failFn:(xhr)=>{
        console.log('fail')
        
    }

})