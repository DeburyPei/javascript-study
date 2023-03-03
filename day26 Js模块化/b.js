import {name as aName} from './a.js'

export const name = 'b'


setTimeout(()=>{
    console.log(aName);
},3000)