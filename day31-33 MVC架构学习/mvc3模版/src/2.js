import {BaseModule} from './baseModule'

export class Module extends BaseModule{
  data = {name:'bighead'}
  element= null
  container=null
  events = {
    'input input':(e)=>{
      
      this.data.name = e.target.value;
      this.update()
    }
  }
  template=`
  <div class="module2">
    <h1>模块2</h1>
    <div><span>用户名</span><input value="{{name}}" /></div>
    <div>你输入的是：<span id="output">{{name}}<span></div>
  </div>
`
  constructor(container){
      super()
      this.container = container
      this.element = this.render()
      this.mount()
  }
  
}

