
import {BaseModule} from './baseModule'
// 无逗号 也不用键值对
export class Module extends BaseModule{  
  data = { count: 1, }
  element = null
  container = null
  events = {
      'click .bt1':()=>{this.data.count += 1;this.update()},
      'click .bt2':()=>{this.data.count -= 1;this.update()},
      'click .bt3':()=>{this.data.count *= 2;this.update()},
      'click .bt4':()=>{this.data.count *= 3;this.update()},

      
  }
  template = `
    <div class="module1">
      <h1>模块1</h1>
      <div id="count">{{count}}</div>
      <div><button class="bt1">+1</button></div>
      <div><button class="bt2">-1</button></div>
      <div><button class="bt3">*2</button></div>
      <div><button class="bt4">*3</button></div>
    </div>
`
  constructor(container) {
    super()  // 继承
    this.container = container
    this.element = this.render()   // div = createElemnet ...
    
    this.mount()
  }
 
}