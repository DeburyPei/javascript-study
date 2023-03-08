import { createElement } from './helper'
import {compile} from 'handlebars'
import {EventEmitter} from './eventEmitter'
import {globalEventEmitter} from './eventEmitter'


export const view = {
 
  element: null,
  container: null,
  template: `
  <div class="moduleNav">
  <div>
    <span>导航</span>
    <a href="#/">首页</a>
    <a href="#/page1">模块1</a>
    <a href="#/page2">模块2</a>
    <a href="#/page3">模块3</a>
    <button class="test">模块1</button>
    <button class="test2">模块2</button>
  </div>
</div>
`,
  //初始化渲染  
  init(container) {  // 初始化赋值
    this.container = container
    this.element = this.render()   // div = createElemnet ... 
    this.mount()
   
  },
  render() {
    
    const html = compile(this.template)({})
    const element = createElement(html)
    this.bindEvents(element)
    return element
  },
  bindEvents(element){
    const btn = element.querySelector('.test')
    btn.addEventListener('click',()=>{
      window.history.pushState(null,null,'/page1')
      globalEventEmitter.emit('hashchange','/page1')

    })
    const btn1 = element.querySelector('.test2')
    btn1.addEventListener('click',()=>{
      window.history.pushState(null,null,'/page2')
      globalEventEmitter.emit('hashchange','/page2')

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



