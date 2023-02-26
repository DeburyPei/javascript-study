function time(...params) {
    if (!(this instanceof time)) {
        return new time(...params)
    }
    if(arguments.length > 1){

    
        params[1] -= 1
       
    }
    this.date = new Date(...params)

}
time.prototype = {
    constructor: time,
    // year(){
    //     return this.date.getFullYear()
    // }
    parts(attrs) {
        if (attrs === undefined) {
            return {
                year: this.date.getFullYear(),
                month: this.date.getMonth() + 1,
                day: this.date.getDate(),
                weekday: this.date.getDay(),
                hour: this.date.getHours(),
                minute: this.date.getMinutes(),
                second: this.date.getSeconds(),

            }
        } else {
            const { year, month, day, hour, minute, second } = attrs
            // year 不为 undefined null 0 '' NaN   如果 && 就设置不了 0
            year !== undefined && this.date.setFullYear(year)
            month !== undefined && this.date.setMonth(month - 1)
            day !== undefined && this.date.setDate(),
            hour !== undefined && this.date.setHours(),
            minute !== undefined && this.date.setMinutes(),
            second !== undefined && this.date.setSeconds()

        }


    },
    add(n,unit){
        const vaild = 'year month day hour minute second'.split(' ').includes(unit)  // 判断unit 是不是在这些数组中
        if(!vaild){
            throw new Error('传了个毛')
        }
        const table = {
            second:1000,
            minute: 1000* 60,
            hour:1000*60*60,
            day:1000 * 60 * 60 *24
        }
        if(unit === 'year'){
            this.date.setFullYear(this.date.getFullYear() + n)
        }else if(unit === 'month'){
            this.date.setMonth(this.date.getMonth() + n )  //setMonth - 1  getMonth + 1 所以抵消
        }else{
            // this.date - 0  时间戳
            this.date = new Date(this.date - 0 + table[unit] * n)

        }
    },
    isLeapYear(){
        const year = this.date.getFullYear()
        if(year % 4 === 0){
            if(year%100 === 0){
                if(year%400 === 0){
                    return true
                }else{
                    return false
                }
            }else{
                return true
            }
        }else{
            return false
        }
    },
    lastDayOfMonth(){
        const {year,month,hour,minute,second} = this.parts()
        return new time(year,month+1,0,hour,minute,second)  // 这个月最后一天 就是下个月0号

    },
    format(pattern){
        const {year,month,day,hour,minute,second} = this.parts()
        return pattern.replace(/yyyy/g,year)
        .replace(/MM/g,padLeftZero(month))
        .replace(/dd/g,padLeftZero(day))
        .replace(/HH/g,padLeftZero(hour))
        .replace(/mm/g,padLeftZero(minute))
        .replace(/ss/g,padLeftZero(second))
    }
}
function padLeftZero(n){
    return n>10?''+n:'0'+n
}

// const t = new time('2001-02-03')
// let { year, month, day } = t.parts()

// t.parts({
//     year: 1990,
//     month: 3
// })

const t = new time('2001-01-31')
t.add(1,'month')
console.log(t.date.toLocaleString());
console.log(t.format('yyyy/MM/dd HH:mm'))
