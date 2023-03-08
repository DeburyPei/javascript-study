import axios from "axios"
import { createElement } from "./helper"
import { EventEmitter } from './eventEmitter'
import { compile } from 'handlebars'
class Model extends EventEmitter {
  data = {
    output: '暂无数据'
  }
  constructor() {
    super()
  }
  setData(obj){
    Object.assign(this.data,obj)
    this.emit('changed')
  }

}
const model = new Model()

export const view = {
  model: model,
  element: null,
  container: null,
  template: `
  <div class="module3">
    <h1>模块3</h1>
    <div><button id="btn">点击加载数据</button></div>
    <div id="output">{{output}}</div>
  </div>
`,
  init(container) {
    this.container = container
    this.element = this.render()
    this.mount()
    this.mock()  // Vue React  加载数据放在 mount 之后 就是挂载之后  面试必须这样回答
    this.model.on('changed', () => {
      this.update()
    })
  },

  mock() {
    //拦截器 伪造数据
    axios.interceptors.response.use(undefined, (err) => { // 成功 不做处理undefined 失败做处理
      if (err.config?.url === '/xxx') {
        return { data: "模拟数据" + Math.random() }
      }
      throw err
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
    button.addEventListener('click', async () => {
      const response = await axios.get("/xxx")
     this.model.setData({output:response.data})
      // const output = element.querySelector('#output')
      // output.textContent = response.data
    })
  },
  mount() {
    this.container.innerHTML = ''
    this.container.append(this.element)
  },
  update() {
    const newElement = this.render()
    this.element.replaceWith(newElement)
    this.element = newElement

  }
}


