//创建请求
const xhr = new XMLHttpRequest()
//初始化请求
xhr.open('GET','/xxx')
//监听请求
/*
xhr.onerror = () => {
    console.log('请求试败 失败原因:'+ xhr.status)
    
}

xhr.onload = () =>{
    console.log('请求成功 得到内容:'+ xhr.response)

}
*/
/*
0	UNSENT	代理被创建，但尚未调用 open() 方法。
1	OPENED	open() 方法已经被调用。
2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
3	LOADING	下载中；responseText 属性已经包含部分数据。
4	DONE	下载操作已完成。
*/ 
xhr.onreadystatechange = () =>{
    if(xhr.readyState === 4){
        if(xhr.status>=200 && xhr.status < 300){
            console.log('请求成功 得到内容:'+ xhr.responseText)

        }else{
    console.log('请求试败 失败原因:'+ xhr.status)

        }
    }
}
//发送请求
xhr.send()