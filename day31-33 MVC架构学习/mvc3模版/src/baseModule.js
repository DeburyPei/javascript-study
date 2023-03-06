import { compile } from "handlebars"
import { createElement } from './helper'
export class BaseModule {
    render() {
        const html = compile(this.template)(this.data)
        const element = createElement(html)
        this.bindEvents(element)
        return element
    }
    bindEvents(element) {
        for (let key in this.events) {
            // key = '事件 选择器'
            const fn = this.events[key]
            const index = key.indexOf(' ')
            const eventName = key.slice(0, index)   // click
            const selector = key.slice(index + 1)   // .bt1

            //事件委托 没有监听button 而是监听祖先  通过e.target.matches
            // 正确的事件委托 面试时候再看
            element.addEventListener(eventName, (e) => {
                if (e.target.matches(selector)) {
                    fn(e)
                }
            })

        }
    }
    mount() {
        this.container.append(this.element)
    }
    update() {

        const newDiv = this.render()
        //替换div 但是只是在页面 不是在js中替换的
        this.element.replaceWith(newDiv)

        this.element = newDiv

    }
}