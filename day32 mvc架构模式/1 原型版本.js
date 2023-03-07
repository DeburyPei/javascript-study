import { createElement } from './helper'
import {compile} from 'handlebars'
import {eventEmitter} from './eventEmitter'

const model = Object.create(eventEmitter)  // 等于 model._ _ proto _ _= eventEmitter
Object.assign(model,{
  queue:{},  //自己的 队列
  data: {
    count: 1,
  },
  add(){
    this.data.count += 1
    this.emit('changed')
  },
  minus(){
    this.data.count -= 1
    this.emit('changed')
  }
})

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
    this.container = container
    this.element = this.render()   // div = createElemnet ... 
    this.mount()
    this.model.on('changed',()=>{
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



