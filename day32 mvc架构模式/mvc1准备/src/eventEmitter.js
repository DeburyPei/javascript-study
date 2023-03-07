export class EventEmitter {
    
    constructor(){
        this.queue = {
            // change : []
             // xxx : []
          }
    }
    //添加监听
    on(name,fn){
      // 初始化
      this.queue[name] = this.queue[name] || []
      this.queue[name].push(fn)
    }
    // 取消监听
    off(name,fn){
      this.queue[name] = this.queue[name] || []
      const index = this.queue[name].indexof(fn)
      this.queue[name].splice(index,1)
    }
    // 调度事件
    emit(name,...args){
    
      this.queue[name] = this.queue[name] || []
      this.queue[name].forEach(fn=>fn(...args))
    }
  }