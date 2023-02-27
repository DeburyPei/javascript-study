var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) { queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/

    console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)
    // 表驱动
    const table = {
        '/': ['text/html;charset=utf-8', `<!DOCTYPE html>
        <html lang="en">
          <head>
             <link rel="stylesheet" href="/style.css">
             
          </head>
          <body>
              <h1>hello</h1>
              <button id='x'>Execute</button>
              <script src="/main.js"></script>
              <script src="/ajax.js"></script>

          </body>
        </html>`],
        '/hello': ['text/html;charset=utf-8', `二哈`],
        '/style.css': ['text/css;charset=utf-8', `h1{color: red;}`],
        '/main.js': ['text/javascript;charset=utf-8', `
        const button = document.querySelector('#x')
        button.onclick = function(){
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
        }
       `],
        '/ajax.js': ['text/javascript;charset=utf-8', `
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
    
    }`],
        '/data':['application/json;charset=utf-8',` {
            'name':'bighead'
           }`]

    }
    if (table[path][0] !== undefined) {
        response.statusCode = 200

        response.setHeader('Content-Type', table[path][0])
        response.write(table[path][1])
        response.end()

    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`你输入的路径不存在对应的内容`)
        response.end()
    }

    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)

