import axios from 'axios'

const $button = document.querySelector('#x')
$button.addEventListener('click',()=>{
  /*  简单get 
  axios
    .get("https://mock.apifox.cn/m1/2172253-0-default/user")
    .then(
        (data)=>{
          console.log("成功");
        }
        ,(reason)=>{
          console.log("失败的原因:"+reason);
        }
      
    )
    */
  //  axios({
  //   method:'post',
  //   url:'/user',
  // baseURL:'https://mock.apifox.cn/m1/2172253-0-default',
  // Content-Type:'aplication/json',
  //   data:{
  //     name:'hellobighead',
  //     age:18
  //   }
  //  }) 等同于下面
//    axios
//    .post('https://mock.apifox.cn/m1/2172253-0-default/user',{
//     name:"hellobighead",age:18
//    })
//    .then((data)=>{
//       console.log('数据是 ',data);
//    },(reason)=>{
//     console.log('出错了，原因是 ',reason);
//  })

        axios.defaults.baseURL = 'https://mock.apifox.cn/m1/2172253-0-default'
        // // post get 都会添加到请求头
        // axios.defaults.headers.common["Authorization"]  = "...."
        // // post 专用
        // axios.defaults.headers.post['Content-Type'] = "hello"
        // axios.get('/user')        
        // axios.post('/premisson',{name:"hello"})// 有数据才能让axios.defaults.headers.post['Content-Type'] = "hello" 出来

        //响应结构
        axios.get('/user').then((response)=>{
          console.log(response.status)
          console.log(response.statusText)
          console.log(response.headers)//响应ff f头
          console.log(response.data)//响应值


        })



      })