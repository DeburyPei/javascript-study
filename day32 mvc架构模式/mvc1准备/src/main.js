import './style.scss'
import { view as mount1 } from './1.js'
import { view as mount2 } from './2.js'
import { mount as mount3 } from './3.js'

const app = document.getElementById('app')

mount1.init(app)
mount2.init(app)
mount3(app)

