import axios from 'axios'
import {createApp} from 'vue'
import React from 'react'
import './style.css'
import logo from './images/logo.png'

const img = document.querySelector("#x")
img.src = logo
const button = document.querySelector("#y")
button.addEventListener('click',()=>{
    import('./a.js').then(module => console.log(module.name))
})

axios.get("/xxx").then((data)=>{console.log(data)},(data)=>{console.log(data)})

console.log(createApp)
console.log(React)

