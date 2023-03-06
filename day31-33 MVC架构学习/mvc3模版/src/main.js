import './style.scss'
import { Module as Module1 } from './1.js'
import { Module as Module2 } from './2.js'
import { Module as Module3 } from './3.js'

const app = document.getElementById('app')

// module1.init(app)
new Module1(app)
new Module2(app)
new Module3(app)

// // import Handlebars from 'handlebars'
// import {compile} from 'handlebars'
// const htmlWithNoData = compile("<h1>{{name}}</h1>");
// htmlWithNoData({name:"hello"})
// htmlWithNoData({name:"hello111"})
