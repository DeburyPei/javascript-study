import './style.scss'
import { view as moduleNav } from './nav'

import { view as mount1 } from './1.js'
import { view as mount2 } from './2.js'
import { view as mount3 } from './3.js'
import { view as moduleHome } from './home'
import { view as module404 } from './not_found'



const nav = document.querySelector('.nav')
const content = document.querySelector('.content')

moduleNav.init(nav)
const route = ()=>{
    let {hash} = window.location
    hash = hash.slice(1) || '/'  // 如果第一个为空也就是首页 就自动全部为  / 下面省着写

    switch (hash) {
        // case '':
        // case '#/':
        // case '#':
        case '/':
            moduleHome.init(content)
            break
        case '/page1':
            mount1.init(content)
    
            break
        case '/page2':
            mount2.init(content)
     
            break
        case '/page3':
            mount3.init(content)
    
            break
        default:
            module404.init(content)
            break
    }}

route()
window.addEventListener('hashchange',route)