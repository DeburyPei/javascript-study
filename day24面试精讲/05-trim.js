const trim = (str)=>{
    return str.replace(/^\s+|\s+$/g,'')
}

const trim2 = (str) =>{
    while(str[0] === ' '){
        str = str.slice(1)
    }
    while(str[str.length - 1] === ' '){
        str = str.slice(0,-1)
    }
    return str
}