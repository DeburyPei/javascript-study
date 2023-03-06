import axios from "axios"
import { createElement } from "./helper"
//拦截器 伪造数据
axios.interceptors.response.use(undefined, (err) => { // 成功 不做处理undefined 失败做处理
  if (err.config?.url === '/xxx') {
    return { data: "模拟数据" + Math.random() }
  }
})
export class Module {
  data = {output:'hellobighead'}
  element = null
  container = null
  constructor(container) {
    this.container = container
    this.element = this.render()
    this.mount()
  }
  render() {
    const element = createElement(`
      <div class="module3">
        <h1>模块3</h1>
        <div><button id="btn">点击加载数据</button></div>
        <div id="output">${this.data.output}</div>
      </div>
    `)
    this.bindEvents(element)
    return element

  }
  bindEvents(element) {
    element = this.element || element
    const button = element.querySelector('button')
    button.addEventListener('click', async () => {
      const response = await axios.get("/xxx")
      const output = element.querySelector('#output')
      output.textContent = response.data
    })
  }
  mount(){
    this.container.append(this.element)
  }
}

