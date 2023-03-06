import './style.scss'
import { Module as Module1 } from './1.js'
import { module as module2 } from './2.js'
import { Module as Module3 } from './3.js'

const app = document.getElementById('app')

// module1.init(app)
new Module1(app)
module2.init(app)
new Module3(app)


