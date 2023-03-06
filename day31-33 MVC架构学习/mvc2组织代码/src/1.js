
import { createElement } from './helper'

// 无逗号 也不用键值对
export class Module{  
  data = { count: 1, }
  element = null
  container = null
  constructor(container) {
    this.container = container
    this.element = this.render()   // div = createElemnet ...
    
    this.mount()
  }
  render() {
    const element = createElement(`
      <div class="module1">
        <h1>模块1</h1>
        <div id="count">${this.data.count}</div>
        <div><button>+1</button></div>
      </div>
    `)
    this.bindEvents(element)
    return element
  }
  bindEvents(element){
    element = this.element || element  // 保底
    const button = element.querySelector('button')
    //点击按钮就更新 count
    button.addEventListener('click', () => {
      this.data.count += 1
      // this.element.querySelector('#count').textContent = this.data.count  // 局部更新
      this.update()
    })
  }
  mount(){
    this.container.append(this.element)
  }
  update(){
    //没有绑定事件
    // const newDiv = this.render()
    // this.element.replaceWith(newDiv)
    
    //创建新的div
    const newDiv = this.render()
    //替换div 但是只是在页面 不是在js中替换的
    this.element.replaceWith(newDiv)
   
    this.element = newDiv
    this.bindEvents()
  }
}


// // 函数没参数 变成属性
// const module = {
//   data: {
//     count: 1,
//   },
//   element: null,
//   container:null,
//   //初始化渲染  
//   init(container){  // 初始化赋值
//     this.container = container
//     this.element = this.render()   // div = createElemnet ...
//     this.bindEvents()
//     this.mount()
//   },
//   render() {
//     return createElement(`
//       <div class="module1">
//         <h1>模块1</h1>
//         <div id="count">${this.data.count}</div>
//         <div><button>+1</button></div>
//       </div>
//     `)
//   },
//   bindEvents(element){
//     element = this.element || element  // 保底
//     const button = element.querySelector('button')
//     //点击按钮就更新 count
//     button.addEventListener('click', () => {
//       this.data.count += 1
//       // this.element.querySelector('#count').textContent = this.data.count  // 局部更新
//       this.update()
//     })
//   },
//   mount(){
//     this.container.append(this.element)
//   },
//   update(){
//     //没有绑定事件
//     // const newDiv = this.render()
//     // this.element.replaceWith(newDiv)
    
//     //创建新的div
//     const newDiv = this.render()
//     //替换div 但是只是在页面 不是在js中替换的
//     this.element.replaceWith(newDiv)
//     console.log(this.element);
//     this.element = newDiv
//     this.bindEvents()
//   }

// }
// export { module }
