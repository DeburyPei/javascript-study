const ajax = ( {method,path,body,successFn,failFn}) => {
    // const method=obj.method
    // const path=obj.path
    // const body=obj.body

    // const successFn=obj.successFn
    // const failFn=obj.failFn


    // const {method,path,body,successFn,failFn} = obj

    const xhr = new XMLHttpRequest()

    xhr.open(method, path)



    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('请求成功 得到内容:' + xhr.responseText)
                successFn(xhr)
            } else {
                console.log('请求试败 失败原因:' + xhr.status)
                failFn(xhr.status)
            }
        }
    }

    xhr.send(body)

}