import axios from "axios"
import {BaseModule} from './baseModule'

//拦截器 伪造数据
axios.interceptors.response.use(undefined, (err) => { // 成功 不做处理undefined 失败做处理
  if (err.config?.url === '/xxx') {
    return { data: "模拟数据" + Math.random() }
  }
})
export class Module extends BaseModule{
  data = {output:'hellobighead'}
  element = null
  container = null
  events = {
      'click button':async ()=>{
        const response = await axios.get("/xxx")
        const output = this.element.querySelector('#output')
        output.textContent = response.data
      }
  }
  template = `
  <div class="module3">
    <h1>模块3</h1>
    <div><button id="btn">点击加载数据</button></div>
    <div id="output">{{output}}</div>
  </div>
`
  constructor(container) {
    super()
    this.container = container
    this.element = this.render()
    this.mount()
  }

}

