// 定时器
class Timer {
    constructor(time) {
        this.time = time
        this.tiemover 
    }
    _run() {
        this.time ++
        console.log(this.time)
        if(this.time > 200) {
            clearInterval(this.tiemover)
            this.end()
        }    
    }
    start() {
        let self = this
        this.tiemover = setInterval(this._run.bind(self),100)
    }
    end() {
        console.log('end')
    }
    gettime() {
        console.log(this.time)
    }
}

export default Timer