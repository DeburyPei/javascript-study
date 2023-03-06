import { createElement } from "./helper"
const module = {
  data : {name:'bighead'},
  element: null,
  container:null,
  init(container){
      this.container = container
      this.element = this.render()
      this.mount()
  },
  render(){
    const element = createElement(`
      <div class="module2">
        <h1>模块2</h1>
        <div><span>用户名</span><input value="${name}" /></div>
        <div>你输入的是：<span id="output">${name}<span></div>
      </div>
    `)
    this.bindEvents(element)
    return element
  },
  bindEvents(element){
    element = this.element || element
    const input = element.querySelector('input')
    input.addEventListener('input',(e)=>{
      this.data.name = e.target.value
      element.querySelector('#output').textContent = this.data.name
    })
  },
  mount() {
    this.container.append(this.element)
  }
}

export{module}