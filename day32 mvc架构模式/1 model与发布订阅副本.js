import { createElement } from './helper'
import {compile} from 'handlebars'

const eventEmitter = {
  queue :{
    // change : []
     // xxx : []
  },
  //添加监听
  on(name,fn){
    // 初始化
    this.queue[name] = this.queue[name] || []
    this.queue[name].push(fn)
  },
  // 取消监听
  off(name,fn){
    this.queue[name] = this.queue[name] || []
    const index = this.queue[name].indexof(fn)
    this.queue[name].splice(index,1)
  },
  // 调度事件
  emit(name,...args){
    
    this.queue[name] = this.queue[name] || []
    this.queue[name].forEach(fn=>fn(...args))
  }
}
const model = {
  data: {
    count: 1,
  },
  add(){
    this.data.count += 1
    eventEmitter.emit('model:changed')
  },
  minus(){
    this.data.count -= 1
    eventEmitter.emit('model:changed')
  }
}
export const view = {
  model:model,
  element: null,
  container: null,
  template: `
  <div class="module1">
    <h1>模块1</h1>
    <div id="count">{{count}}</div>
    <div><button>+1</button></div>
    <div><button class="btn1">-1</button></div>

  </div>
`,
  //初始化渲染  
  init(container) {  // 初始化赋值
    this.model = model
    this.container = container
    this.element = this.render()   // div = createElemnet ... 
    this.mount()
    eventEmitter.on('model:changed',()=>{
      
      this.update()
    })
  },
  render() {
    
    const html = compile(this.template)(this.model.data)
    const element = createElement(html)
    this.bindEvents(element)
    return element
  },
  bindEvents(element) {
   
    const button = element.querySelector('button')
    //点击按钮就更新 count
    button.addEventListener('click', () => {
      this.model.add()
      
    })
    const button1 = element.querySelector('.btn1')
    //点击按钮就更新 count
    button1.addEventListener('click', () => {
      this.model.minus()
      
    })
  },
  mount() {
    this.container.append(this.element)
  },
  update(){
    const newElement = this.render()
    this.element.replaceWith(newElement)
    this.element = newElement
  
  }
}

// // mvc 默认入口
// export const controller = {
//   model:model,
//   view:view,
//   init(container){
//     // 传数据 model
//     this.view.init(container,this.model)
//   },
 
  

// }

