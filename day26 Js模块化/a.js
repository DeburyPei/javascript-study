import {name as bName} from './b.js'

export const name = 'a'


setTimeout(()=>{
    console.log(bName);
},3000)