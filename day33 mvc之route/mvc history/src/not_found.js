import { createElement } from './helper'
import {compile} from 'handlebars'
import {EventEmitter} from './eventEmitter'


export const view = {
 
  element: null,
  container: null,
  template: `
  <div class="module404">
  <div>
    <h1>不存在页面 404</h1>
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
    return element
  },

  mount() {
    this.container.innerHTML = ''
    this.container.append(this.element)
  },
  update(){
    const newElement = this.render()
    this.element.replaceWith(newElement)
    this.element = newElement
  
  }
}



